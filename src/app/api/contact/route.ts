import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { username, email, mobile, message, token } = body;

    // ✅ Basic validation
    if (!token || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // 🔐 Verify reCAPTCHA
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY!,
          response: token,
        }),
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    console.log("reCAPTCHA response:", recaptchaData);

    if (!recaptchaData.success) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA verification failed" }),
        { status: 403 }
      );
    }

    console.log("USERNAME: ", process.env.GMAIL_USER);
    console.log("PASS: ", process.env.GMAIL_PASS);
    

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });



    // 🧪 Verify transporter (VERY IMPORTANT)
    await transporter.verify();

    // 📩 Send email
    await transporter.sendMail({
      from: `"STAY VIA Contact" <${process.env.GMAIL_USER}>`,
      to: "Stayviahost@gmail.com",
      replyTo: email,
      subject: "📩 Nouveau message depuis le site",
      html: `
        <h2>Nouveau message</h2>
        <p><strong>Nom :</strong> ${username}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${mobile}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    // Replace your existing sendMail code with this:

    await transporter.sendMail({
        from: `"STAY VIA Host" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "Nous avons bien reçu votre message ✅",
        html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5; padding: 40px 20px; }
            .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
            .header { background-color: #000000; padding: 40px 30px; text-align: center; }
            .logo { max-width: 180px; height: auto; }
            .content { padding: 50px 40px; color: #333333; line-height: 1.7; }
            .greeting { font-size: 18px; color: #000000; margin-bottom: 25px; }
            .greeting strong { color: #C9A962; font-weight: 600; }
            .message { font-size: 15px; color: #555555; margin-bottom: 25px; }
            .section-title { font-size: 15px; color: #000000; font-weight: 600; margin-bottom: 15px; margin-top: 30px; }
            .message-box { background-color: #FAFAFA; border-left: 4px solid #C9A962; padding: 20px 25px; margin: 20px 0; border-radius: 0 4px 4px 0; color: #666666; font-style: italic; font-size: 14px; }
            .contact-info { margin-top: 35px; padding-top: 30px; border-top: 1px solid #E0E0E0; font-size: 14px; color: #555555; }
            .contact-item { margin-bottom: 8px; color: #666666; }
            .contact-item strong { color: #000000; }
            .footer { background-color: #000000; padding: 30px; text-align: center; }
            .footer-text { color: #C9A962; font-size: 14px; font-weight: 600; letter-spacing: 0.5px; }
            @media only screen and (max-width: 600px) {
                body { padding: 20px 10px; }
                .content { padding: 35px 25px; }
                .header { padding: 30px 20px; }
            }
            </style>
        </head>
        <body>
            <div class="email-container">
            <div class="header">
                <img src="https://stayviahost.com/logo2.png" alt="STAYVIA Logo" class="logo">
            </div>
            <div class="content">
                <p class="greeting">Bonjour <strong>${username}</strong>,</p>
                <p class="message">
                Merci de nous avoir contactés. Nous avons bien reçu votre message et notre équipe vous répondra dans les plus brefs délais.
                </p>
                <p class="section-title">Récapitulatif de votre message :</p>
                <div class="message-box">${message}</div>
                <p class="message">
                Si votre demande est urgente, vous pouvez également nous joindre par téléphone.
                </p>
                <div class="contact-info">
                <div class="contact-item">📞 <strong>+212 610 999 299</strong></div>
                <div class="contact-item">✉️ <strong>stayviahost@gmail.com</strong></div>
                </div>
                <p class="message" style="margin-top: 30px; margin-bottom: 0;">
                Cordialement,<br>
                <strong style="color: #C9A962;">L'équipe STAY VIA</strong>
                </p>
            </div>
            <div class="footer">
                <div class="footer-text">STAY VIA</div>
            </div>
            </div>
        </body>
        </html>
        `
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error) {
    console.error("API /contact error:", error);

    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
