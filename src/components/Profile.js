export default function Profile() {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 py-12 px-6">
        {/* Contenedor Principal */}
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8">
          
          {/* Nombre */}
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            ALBA SABÉ DAUSÀ
          </h1>
  
          {/* Información Principal */}
          <div className="mt-4 text-center">
            <p className="text-gray-700 text-lg font-medium">
              CEO d’Alba Sabé Psicologia.
            </p>
            <p className="text-gray-600">
              Psicòloga General Sanitària, Psicoterapeuta del Benestar Emocional, Especialista en Trauma.
            </p>
            <p className="text-gray-500 mt-2">N.Col. 23474</p>
          </div>
  
          {/* Descripción */}
          <div className="mt-6 text-gray-700 text-justify space-y-4">
            <p>
              Hi ha coses a la vida que tens clares sense haver-te-les plantejat mai. Per mi, estudiar psicologia en va ser una.
            </p>
            <p>
              Des que vaig entrar en aquest món, i amb la convicció que salut és molt més que l’absència de malestar, vaig anar especialitzant-me en teràpies de tercera generació: EMDR, Mindfulness, Acceptació i compromís, Creixement sexual i de parella, Psicologia perinatal, psicologia de les emergències, PNL, trauma, aferrament. La meva finalitat és poder acompanyar les persones a alliberar el seu patiment, els seus símptomes, perquè puguin gestionar els seus conflictes i emocions pertorbadores. També em centro a potenciar el creixement personal, la salut i el benestar emocional de cadascun dels meus pacients.
            </p>
            <p>
              Amb la meva experiència i al llarg dels anys, he aconseguit guanyar eines professionals per poder connectar amb tu, escoltar-te, fluir, veure que tot és possible dins la ment humana, ajudar-te a alliberar i deixar anar, per aconseguir els objectius que tu mateix et planteges.
            </p>
          </div>  
        </div>
      </div>
    );
  }
  