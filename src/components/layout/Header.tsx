// import { useIsMobile } from '@/hooks/useIsMobile';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';

export const Header = () => {
  // const isMobile = useIsMobile();

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <MobileHeader />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex">
        <DesktopHeader />
      </div>
    </>
  );
};
