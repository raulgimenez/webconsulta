import Image from "next/image";

export default function ProfessionalsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Columna de la foto */}
        <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
          <Image
            src="/images/reme_low.jpg"
            alt="Reme Rubio"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Columna de la información */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Doctora en Psicologia de l'Educació
            </h2>
            <p className="text-gray-600">
              Número de col·legiada al COPC: 22624
            </p>
          </div>

          {/* Formación */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Formació
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>Llicenciada en Psicologia (UAB 2007)</li>
              <li>Habilitació sanitària (COPC 2014)</li>
              <li>Màster Interuniversitari en Psicologia de l'Educació (UB 2009)</li>
              <li>Doctorat en Psicologia de l'Educació (UAB 2015)</li>
              <li>Màster en "Psicoterapia con niños y adolescentes en los ámbitos clínico y educativo" (ECPNA i IL3-UB 2023)</li>
              <li>Máster en "Clínica Psicoanalítica con niños y adolescentes - Acreditación FEAP", (ECPNA 2025)</li>
            </ul>
          </div>

          {/* Experiencia Profesional */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Experiència Professional
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>Psicoterapeuta</li>
              <li>Tècnica psicòloga al Servei d'Adopcions Internacions (Intress)</li>
              <li>Directora centre d'acollida d'infants i adolescents (Intress 2017-2025)</li>
              <li>Tècnica psicòloga i coordinadora del Servei Tècnic Punt de Trobada Ciutat 2 BCN (Intress 2012-2017)</li>
            </ul>
          </div>

          {/* Experiencia Docente */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
              Experiència Docent
            </h3>
            <div className="space-y-3 text-gray-600">
              <p className="font-medium">Professora Associada a la Facultat de Psicologia (UAB):</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Grau de Psicologia:
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>"Infància i Famílies en contextos de Dificultat"</li>
                    <li>"Psicologia Evolutiva I i II"</li>
                    <li>"TFG"</li>
                    <li>"Pràcticum"</li>
                    <li>"Psicologia Cultural"</li>
                  </ul>
                </li>
                <li>Màster d'Intervenció i Recerca Psicosocial (MURIP)</li>
                <li>Màster Universitari en Psicologia Jurídica i Forense</li>
              </ul>
              <p>Col·laboradora en xerrades del Consorci d'Educació de Barcelona</p>
              <p>Col·laboradora a la Facultat de Psicologia (UOC 2011-2012)</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
