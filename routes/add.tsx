import { FreshContext, Handlers } from "$fresh/server.ts";
import AddForm from "../components/AddForm.tsx";
import ContactModel from "../db/Contact.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const today = new Date();
      const to = today.toString().split(" ",4);
      const fecha = to[2]+" "+to[1]; 
      const form = await req.formData();
      const data = {
        title: form.get("title"),
        athor: form.get("athor"),
        content: form.get("content"),
        date: fecha,
      };

      await ContactModel.create(data);

      return new Response("", {
        status: 303,
        headers: {
          "Location": "/",
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div>
      <AddForm />
    </div>
  );
};

export default Page;