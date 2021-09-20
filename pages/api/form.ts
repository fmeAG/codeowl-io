import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { formGuid, portalId } from '../../api-functions/form';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.post((req, res) => {
  console.log(req.body);
  axios
    .post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        plan: req.body.plan,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
      }
    )
    .then(() => res.redirect('/'));
});

export default handler;
