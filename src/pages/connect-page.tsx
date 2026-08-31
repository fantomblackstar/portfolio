import { useState } from 'react';

import ProfilePhoto from '@/shared/assets/images/profile_photo.jpg';
import Container from '@/shared/ui/layout/container';

import { ConnectLinkList } from '@/widgets/connect/ui/connect-link-list';
import { QrModeToggle } from '@/widgets/connect/ui/qr-mode-toggle';

const ConnectPage = () => {
  const [qrMode, setQrMode] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-4.375rem)] bg-primary pb-16 pt-[5.5rem]">
      <Container className="flex flex-col items-center pt-10">
        <div className="relative mb-6 size-32 overflow-hidden rounded-full md:size-40">
          <img
            src={ProfilePhoto}
            alt="Vasyl Voloshyn"
            className="absolute -bottom-6 left-0 m-0 h-auto w-full"
          />
        </div>
        <h1 className="text-xl font-medium text-primary md:text-2xl mb-3">Vasyl Voloshyn</h1>
        <span className="mb-10 rounded-full bg-gradient-to-r from-orange-1 to-violet-1 px-4 py-1 text-sm font-semibold text-black">
          Software Engineer
        </span>
        <QrModeToggle qrMode={qrMode} onChange={setQrMode} />
        <ConnectLinkList qrMode={qrMode} />
      </Container>
    </section>
  );
};

export { ConnectPage };
