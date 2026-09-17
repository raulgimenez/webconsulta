import DesignerCta from "@/components/DesignerCta";

export default function ProfileContent({ profile, contactHref }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="mx-auto aspect-square w-48 overflow-hidden rounded-lg shadow-lg sm:w-56">
            <img src="/images/reme_foto_perfil.jpeg" alt={profile.imageAlt} className="h-full w-full object-cover object-center" />
          </div>
          <div className="space-y-5">
            <h1 className="text-3xl font-semibold text-gray-900">{profile.heroTitle}</h1>
            <p className="text-lg leading-8 text-gray-600">{profile.heroIntro}</p>
            <DesignerCta href={contactHref}>{profile.contactCta}</DesignerCta>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">{profile.degree}</h2>
            <p className="text-gray-600">{profile.license}</p>
          </div>

          <div className="space-y-4">
            <h3 className="border-b border-gray-200 pb-2 text-xl font-semibold text-gray-900">{profile.sections.education}</h3>
            <ul className="space-y-3 text-gray-600">
              {profile.education.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="border-b border-gray-200 pb-2 text-xl font-semibold text-gray-900">{profile.sections.professional}</h3>
            <ul className="space-y-3 text-gray-600">
              {profile.professional.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="border-b border-gray-200 pb-2 text-xl font-semibold text-gray-900">{profile.sections.teaching}</h3>
            <div className="space-y-3 text-gray-600">
              <p className="font-medium">{profile.teachingIntro}</p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>
                  {profile.psychologyDegree}
                  <ul className="ml-6 list-inside list-disc space-y-1">
                    {profile.teachingCourses.map((course) => <li key={course}>{course}</li>)}
                  </ul>
                </li>
                {profile.teachingPrograms.map((program) => <li key={program}>{program}</li>)}
              </ul>
              {profile.teachingCollaborations.map((collaboration) => <p key={collaboration}>{collaboration}</p>)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
