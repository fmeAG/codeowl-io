import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { formGuid, portalId } from '../../api-functions/form';
import { isProduction } from '../../global/constants';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.post((req, res) => {
  console.log(req.body);
  const optionalPlan = req.body.plan;
  const formData = {
    givenName: req.body['given-name'],
    family: req.body['family-name'],
    organization: req.body.organization,
    email: req.body.email,
    phone: req.body.phone,
    message:
      (optionalPlan ? 'PLAN: ' + optionalPlan + '\n' : '') + req.body.message,
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
