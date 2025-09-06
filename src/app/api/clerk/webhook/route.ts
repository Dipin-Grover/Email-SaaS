import { db } from "@/server/db";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    console.log("Webhook payload:", JSON.stringify(body, null, 2));

    if (body.type !== "user.created" && body.type !== "user.updated") {
      return new Response("Event ignored", { status: 200 });
    }

    const data = body.data;

    // Extract primary email if available
    let emailAddress: string | null = null;
    if (data.email_addresses?.length > 0 && data.primary_email_address_id) {
      const primary = data.email_addresses.find(
        (e: any) => e.id === data.primary_email_address_id
      );
      emailAddress = primary?.email_address ?? null;
    }

    const firstName = data.first_name ?? "";
    const lastName = data.last_name ?? "";
    const imageUrl = data.image_url ?? "";
    const id = data.id;

    if (!id) {
      return new Response("Missing user ID", { status: 400 });
    }

    if (!emailAddress) {
      console.warn("⚠️ User has no email yet, skipping DB insert", {
        id,
        data,
      });
      return new Response("No email found, user skipped", { status: 200 });
    }

    await db.user.upsert({
      where: { id },
      update: { emailAddress, firstName, lastName, imageUrl },
      create: { id, emailAddress, firstName, lastName, imageUrl },
    });

    return new Response("Webhook received", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Internal server error", { status: 500 });
  }
};
