import Image from "next/image";
import DesignerCta from "@/components/DesignerCta";

export default function ProfileContent({ profile, contactHref }) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/images/reme_low.jpg"
              alt={profile.imageAlt}
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="space-y-5">
            <h1 className="text-3xl font-semibold text-gray-900">
              {profile.heroTitle}
            </h1>
            <p className="text-lg leading-8 text-gray-600">
              {profile.heroIntro}
            </p>
            <DesignerCta href={contactHref}>
              {profile.contactCta}
            </DesignerCta>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              {profile.valueTitle}
            </h2>
            <p className="text-gray-600 leading-7">{profile.valueParagraph}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              {profile.degree}
            </h2>
            <p className="text-gray-600">{profile.license}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
              {profile.sections.education}
            </h3>
            <ul className="space-y-3 text-gray-600">
              {profile.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
              {profile.sections.professional}
            </h3>
            <ul className="space-y-3 text-gray-600">
              {profile.professional.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
              {profile.sections.teaching}
            </h3>
            <div className="space-y-3 text-gray-600">
              <p className="font-medium">{profile.teachingIntro}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  {profile.psychologyDegree}
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    {profile.teachingCourses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </li>
                {profile.teachingPrograms.map((program) => (
                  <li key={program}>{program}</li>
                ))}
              </ul>
              {profile.teachingCollaborations.map((collaboration) => (
                <p key={collaboration}>{collaboration}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
