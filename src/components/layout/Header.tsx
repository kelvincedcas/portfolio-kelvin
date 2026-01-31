import { useIsMobile } from '@/hooks/useIsMobile';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';

export const Header = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};
