import { Link } from 'react-router-dom';

import Container from '@/shared/ui/layout/container';
import { QrCode } from '@/shared/ui/qr-code';
import { getConnectPageUrl } from '@/widgets/connect/model/connect-links';


const ConnectQrPage = () => {
  const connectUrl = getConnectPageUrl();

  return (
    <section className="relative flex min-h-[calc(100vh-4.375rem)] items-center bg-primary pb-16 pt-[5.5rem]">
      <Container className="flex flex-col items-center text-center">
        <p className="mb-6 text-lg font-semibold text-primary md:text-xl">Scan for my links</p>
        <QrCode value={connectUrl} size={256} />
        <Link to="/" className="mt-6 text-sm text-secondary underline decoration-secondary/60 underline-offset-4">
          Go to portfolio
        </Link>
      </Container>
    </section>
  );
};

export { ConnectQrPage };
