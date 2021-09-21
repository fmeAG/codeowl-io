import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { formGuid, portalId } from '../../api-functions/form';
import { isProduction } from '../../global/constants';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.post((req, res) => {
  const formData = {
    plan: req.body.plan,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };
  (isProduction
    ? axios.post(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
        formData
      )
    : new Promise<void>((resolve) => {
        console.log('Got form submit:', formData);
        resolve();
      })
  ).then(() => res.redirect('/'));
});

export default handler;
