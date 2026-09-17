import ProfileContent from "@/components/ProfileContent";
import { getCanonicalUrl } from "@/lib/i18n-config";
export default function ProfilePage({ dict, lang }) {
  const contactHref = getCanonicalUrl("/contacto", lang).replace("https://www.remerubio.com", "");
  return <ProfileContent profile={dict.profile} contactHref={contactHref} />;
}
