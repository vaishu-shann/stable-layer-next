import { createThirdwebClient } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  const clientId=  "";
}

export const client = createThirdwebClient({
  clientId: "bfb4a8901e09d80f302031db896aeec8",
});
