import axios, { AxiosError } from 'axios';
import { characterEntities } from 'character-entities';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { formGuid, portalId } from '../../api-functions/form';
import { isPreview, isProduction, LegalConsent } from '../../global/constants';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get((req, res) => {
  return res.redirect('/contact');
});

handler.post((req, res) => {
  const optionalPlan = req.body.plan;
  const formData = {
    fields: [
      { name: 'firstname', value: req.body['given-name'] },
      { name: 'lastname', value: req.body['family-name'] },
      { name: 'company', value: req.body.organization },
      { name: 'email', value: req.body.email },
      { name: 'land', value: 'Deutschland' },
      {
        name: 'message',
        value:
          (optionalPlan ? 'PLAN: ' + optionalPlan + '\n' : '') +
          req.body.message,
      },
    ],
    context: {
      pageUri: 'https://' + req.headers.host + req.url,
      pageName: 'Code-Owl: Kontakt',
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: LegalConsent.text,
      },
    },
  };
  (isProduction || isPreview
    ? axios.post(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
        formData
      )
    : new Promise<void>((resolve) => {
        console.log('Got form submit:', formData);
        resolve();
      })
  )
    .then(() => res.status(202).send(null))
    .catch((err: AxiosError) => {
      console.log('Got following error', err);
      res.status(500).send(err.response.data);
    });
});

export default handler;
