interface Props {
  h2: string;
  subTitle: string;
  desription: string;
}

export function SectionTitle({ subTitle, desription, h2 }: Props): JSX.Element {
  return (
    <>
      <h2 className="text-base font-semibold tracking-wider text-red-600 uppercase">
        {h2}
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
        {subTitle}
      </p>
      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        {desription}
      </p>
    </>
  );
}
