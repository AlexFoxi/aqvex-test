import { cn } from '@/utils/cn';
import logoS from '@/assets/LogoS.svg';
import MadeInUkrain from '@/assets/madeInUkrain.svg';
import Mastercard from '@/assets/footer/mastercard.svg';
import Visa from '@/assets/footer/visa.svg';
import ApplePay from '@/assets/footer/applePay.svg';
import GooglePay from '@/assets/footer/googlePay.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('mt-auto w-full bg-[--background] py-8')}>
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 sm:flex-row md:gap-6">
          <div className="flex items-center gap-3">
            <img src={logoS} alt="AQVEX Logo" className="h-8 w-auto" />
            <img src={MadeInUkrain} alt="Made in Ukrain" className="h-6 w-auto" />
          </div>

          <p className="text-center text-xs font-normal tracking-wide text-[--muted] sm:text-left sm:text-sm">
            AQVEX © {currentYear} <span className="mx-1">|</span> Все права защищены
          </p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <img src={Mastercard} alt="Mastercard" className="h-5 w-auto sm:h-6" />
          <img src={Visa} alt="Visa" className="h-4 w-auto sm:h-5" />
          <img src={ApplePay} alt="Apple Pay" className="h-5 w-auto sm:h-6" />
          <img src={GooglePay} alt="Google Pay" className="h-5 w-auto sm:h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
