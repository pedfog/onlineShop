import { ReactElement } from 'react';

export default function NotFoundPage(): ReactElement {
  return (
    <>
      <h4 className="p-4 md:p-8 pb-0 font-bold">
        Error 404
      </h4>
      <h4 className="p-4 md:p-8 font-bold">
        Page not found
      </h4>
    </>
  );
}
