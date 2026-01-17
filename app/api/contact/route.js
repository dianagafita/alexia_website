import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, project, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Nume, email și mesaj sunt obligatorii." },
        { status: 400 }
      );
    }

    // Send email to the business
    const { data, error } = await resend.emails.send({
      from: "Achip Consulting <noreply@achipconsulting.com>",
      to: ["contact@achipconsulting.com"],
      replyTo: email,
      subject: `Mesaj nou de la ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>Mesaj nou din formularul de contact</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Companie:</strong> ${company}</p>` : ""}
        ${project ? `<p><strong>Tip proiect:</strong> ${project}</p>` : ""}
        <hr />
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Nu am putut trimite mesajul. Încearcă din nou." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("API error:", err);
    return Response.json(
      { error: "Eroare internă. Încearcă din nou mai târziu." },
      { status: 500 }
    );
  }
}
