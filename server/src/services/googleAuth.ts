import { OAuth2Client, TokenPayload } from "google-auth-library";

const clientId = process.env.GOOGLE_CLIENTID;

if (!clientId) {
  throw new Error("Missing GOOGLE_CLIENTID");
}

const client = new OAuth2Client({
  clientId,
});

export async function verifyIdToken(idToken: string): Promise<TokenPayload> {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: clientId,
  });

  const payload = ticket.getPayload();

  if (!payload) {
    throw new Error("Invalid Google token");
  }

  return payload;
}