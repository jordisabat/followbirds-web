type Locale = 'en' | 'pt' | 'es' | 'ca';

const translations: Record<Exclude<Locale, 'en'>, Record<string, string>> = {
  pt: {
    'How it works': 'Como funciona',
    'For Guides': 'Para guias',
    'For Birdwatchers': 'Para observadores',
    Reports: 'Relatórios',
    'Launching with birding guides': 'Lançamento com guias de observação',
    'Run better birding tours.': 'Organize melhores passeios de aves.',
    'Give every guest a story to keep.': 'Dê a cada visitante uma história para guardar.',
    'Followbirds is building a guide workspace for creating tours, sharing sightings, and sending a polished follow-up report.': 'A Followbirds está a criar um espaço de trabalho para guias criarem passeios, partilharem observações e enviarem um relatório final profissional.',
    'Join the founding guide program': 'Junte-se ao programa fundador de guias',
    'See the guest experience': 'Veja a experiência do visitante',
    'Guide workspace preview': 'Pré-visualização do espaço do guia',
    'One place for every tour': 'Um só lugar para cada passeio',
    'Tour setup, shared sightings, and guest follow-up': 'Preparação do passeio, observações partilhadas e acompanhamento dos visitantes',
    'Built with founding guides': 'Criado com guias fundadores',
    'Shape what comes next': 'Ajude a definir o próximo passo',
    'Early access, direct input, and priority support': 'Acesso antecipado, opinião direta e apoio prioritário',
    'The guide workflow': 'O fluxo de trabalho do guia',
    'Simple for you. Memorable for guests.': 'Simples para si. Memorável para os visitantes.',
    'Create a tour': 'Crie um passeio',
    'Share observations': 'Partilhe observações',
    'Send the follow-up': 'Envie o acompanhamento',
    'For birding guides': 'Para guias de observação',
    'Spend less time after the tour.': 'Passe menos tempo depois do passeio.',
    'The guest experience': 'A experiência do visitante',
    'Give guests a better way to remember the day.': 'Dê aos visitantes uma forma melhor de recordar o dia.',
    'Planned guide output': 'Resultado planeado para o guia',
    'Turn a day outside into something worth keeping.': 'Transforme um dia ao ar livre em algo que vale a pena guardar.',
    'Frequently asked questions': 'Perguntas frequentes',
    'Your Questions,': 'As suas perguntas,',
    'Answered': 'respondidas',
    'Help shape the first': 'Ajude a criar o primeiro',
    'Followbirds guide workspace.': 'espaço de trabalho para guias da Followbirds.',
    'Apply as a founding guide': 'Candidate-se como guia fundador',
    'Open the current app': 'Abrir a aplicação atual',
    'Language': 'Idioma'
  },
  es: {
    'How it works': 'Cómo funciona',
    'For Guides': 'Para guías',
    'For Birdwatchers': 'Para observadores',
    Reports: 'Informes',
    'Launching with birding guides': 'Lanzamiento con guías de aves',
    'Run better birding tours.': 'Organiza mejores rutas de aves.',
    'Give every guest a story to keep.': 'Dale a cada visitante una historia que guardar.',
    'Followbirds is building a guide workspace for creating tours, sharing sightings, and sending a polished follow-up report.': 'Followbirds está creando un espacio de trabajo para que los guías organicen rutas, compartan observaciones y envíen un informe final profesional.',
    'Join the founding guide program': 'Únete al programa fundador de guías',
    'See the guest experience': 'Ver la experiencia del visitante',
    'Guide workspace preview': 'Vista previa del espacio del guía',
    'One place for every tour': 'Un solo lugar para cada ruta',
    'Tour setup, shared sightings, and guest follow-up': 'Preparación de la ruta, observaciones compartidas y seguimiento de los visitantes',
    'The guide workflow': 'El flujo de trabajo del guía',
    'Simple for you. Memorable for guests.': 'Sencillo para ti. Memorable para los visitantes.',
    'Create a tour': 'Crea una ruta',
    'Share observations': 'Comparte observaciones',
    'Send the follow-up': 'Envía el seguimiento',
    'For birding guides': 'Para guías de aves',
    'Spend less time after the tour.': 'Dedica menos tiempo después de la ruta.',
    'The guest experience': 'La experiencia del visitante',
    'Give guests a better way to remember the day.': 'Ofrece a los visitantes una mejor forma de recordar el día.',
    'Planned guide output': 'Resultado previsto para el guía',
    'Turn a day outside into something worth keeping.': 'Convierte un día al aire libre en algo que merece la pena guardar.',
    'Frequently asked questions': 'Preguntas frecuentes',
    'Your Questions,': 'Tus preguntas,',
    'Answered': 'respondidas',
    'Help shape the first': 'Ayuda a dar forma al primer',
    'Followbirds guide workspace.': 'espacio de trabajo para guías de Followbirds.',
    'Apply as a founding guide': 'Solicita ser guía fundador',
    'Open the current app': 'Abrir la aplicación actual',
    'Language': 'Idioma'
  },
  ca: {
    'How it works': 'Com funciona',
    'For Guides': 'Per a guies',
    'For Birdwatchers': 'Per a observadors',
    Reports: 'Informes',
    'Launching with birding guides': 'Llançament amb guies d’observació',
    'Run better birding tours.': 'Organitza millors sortides d’aus.',
    'Give every guest a story to keep.': 'Dona a cada visitant una història per conservar.',
    'Followbirds is building a guide workspace for creating tours, sharing sightings, and sending a polished follow-up report.': 'Followbirds està creant un espai de treball perquè els guies organitzin sortides, comparteixin observacions i enviïn un informe final professional.',
    'Join the founding guide program': 'Uneix-te al programa fundador de guies',
    'See the guest experience': 'Veure l’experiència del visitant',
    'Guide workspace preview': 'Previsualització de l’espai del guia',
    'One place for every tour': 'Un sol lloc per a cada sortida',
    'Tour setup, shared sightings, and guest follow-up': 'Preparació de la sortida, observacions compartides i seguiment dels visitants',
    'The guide workflow': 'El flux de treball del guia',
    'Simple for you. Memorable for guests.': 'Senzill per a tu. Memorable per als visitants.',
    'Create a tour': 'Crea una sortida',
    'Share observations': 'Comparteix observacions',
    'Send the follow-up': 'Envia el seguiment',
    'For birding guides': 'Per a guies d’observació',
    'Spend less time after the tour.': 'Dedica menys temps després de la sortida.',
    'The guest experience': 'L’experiència del visitant',
    'Give guests a better way to remember the day.': 'Ofereix als visitants una millor manera de recordar el dia.',
    'Planned guide output': 'Resultat previst per al guia',
    'Turn a day outside into something worth keeping.': 'Converteix un dia a l’aire lliure en quelcom que val la pena conservar.',
    'Frequently asked questions': 'Preguntes freqüents',
    'Your Questions,': 'Les teves preguntes,',
    'Answered': 'respostes',
    'Help shape the first': 'Ajuda a donar forma al primer',
    'Followbirds guide workspace.': 'espai de treball per a guies de Followbirds.',
    'Apply as a founding guide': 'Sol·licita ser guia fundador',
    'Open the current app': 'Obre l’aplicació actual',
    'Language': 'Idioma'
  }
};

const select = document.querySelector<HTMLSelectElement>('#language-select');
const storageKey = 'followbirds-language';
const originalText = new WeakMap<Text, string>();

Object.assign(translations.pt, {
  'We are building the essential tools around the moments that make a great birding tour.': 'Estamos a criar as ferramentas essenciais para os momentos que tornam um passeio de aves memorável.',
  'Set up the route, checklist, and guest details before you leave.': 'Prepare a rota, a lista e os dados dos visitantes antes de partir.',
  'Record each sighting once while guests follow the same shared experience.': 'Registe cada observação uma vez enquanto os visitantes acompanham a mesma experiência partilhada.',
  'Turn the day into a polished summary guests can revisit and share.': 'Transforme o dia num resumo profissional que os visitantes podem rever e partilhar.',
  'We are building Followbirds with guides who want a simpler way to run tours and give every guest something worth keeping.': 'Estamos a criar a Followbirds com guias que querem uma forma mais simples de organizar passeios e dar a cada visitante algo que vale a pena guardar.',
  'Reusable tour setup': 'Configuração reutilizável do passeio',
  'Shared live checklist': 'Lista partilhada em tempo real',
  'Client-ready follow-up': 'Acompanhamento pronto para clientes',
  'One place for tour history': 'Um só lugar para o histórico dos passeios',
  'The current Followbirds app helps guests explore the Algarve, identify birds, find tracks, and keep their own checklist.': 'A aplicação atual da Followbirds ajuda os visitantes a explorar o Algarve, identificar aves, encontrar percursos e manter a sua própria lista.',
  'Offline Algarve bird catalogue': 'Catálogo de aves do Algarve offline',
  'Bird names in six languages': 'Nomes de aves em seis idiomas',
  'Tracks, maps, and birding locations': 'Percursos, mapas e locais de observação',
  'Nearby observations through eBird': 'Observações próximas através do eBird',
  'Personal checklists and bird history': 'Listas pessoais e histórico de aves',
  'The planned Followbirds report will bring together species, route, photos, notes, and guest memories in one shareable follow-up.': 'O relatório planeado da Followbirds reunirá espécies, rota, fotografias, notas e memórias dos visitantes num único acompanhamento partilhável.',
  'Tour details and route': 'Detalhes e rota do passeio', 'Species and sightings': 'Espécies e observações', 'Photos and guide notes': 'Fotografias e notas do guia', 'Shareable guest summary': 'Resumo partilhável para o visitante',
  'What is Followbirds?': 'O que é a Followbirds?', 'What is available today?': 'O que está disponível hoje?', 'Who is the founding guide program for?': 'A quem se destina o programa fundador?', 'Will the guide module be available immediately?': 'O módulo para guias estará disponível imediatamente?', 'Who can become a guide?': 'Quem pode ser guia?',
  'Followbirds is building a guide-first workspace for creating tours, sharing sightings, and giving guests a valuable follow-up experience.': 'A Followbirds está a criar um espaço de trabalho pensado primeiro para guias criarem passeios, partilharem observações e oferecerem aos visitantes uma experiência final valiosa.',
  'The birdwatcher app is available today with Algarve tracks, maps, bird information, eBird Nearby, and personal checklists. The guide workspace is being built with founding guides.': 'A aplicação para observadores já está disponível com percursos do Algarve, mapas, informação sobre aves, eBird Nearby e listas pessoais. O espaço de trabalho para guias está a ser criado com guias fundadores.',
  'It is for birding professionals and enthusiastic guides who run tours and want to shape the first version of the Followbirds guide workspace.': 'Destina-se a profissionais de observação e guias entusiastas que organizam passeios e querem ajudar a definir a primeira versão do espaço de trabalho para guias da Followbirds.',
  'Not yet. Founding guides will help us validate the workflow, test early versions, and receive priority access as the module launches.': 'Ainda não. Os guias fundadores ajudarão a validar o fluxo de trabalho, testar as primeiras versões e terão acesso prioritário quando o módulo for lançado.',
  'Any birding professional or enthusiastic guide who leads tours in Portugal can apply. Email': 'Qualquer profissional de observação ou guia entusiasta que organize passeios em Portugal pode candidatar-se. Envie um email para',
  'Explore': 'Explorar', 'For birdwatchers': 'Para observadores', 'Tour reports': 'Relatórios de passeios', 'Guide workspace': 'Espaço de trabalho do guia', 'Join the program': 'Junte-se ao programa', 'Open the web app': 'Abrir a aplicação web', 'Support': 'Apoio', 'Contact us': 'Contacte-nos', 'Privacy policy': 'Política de privacidade'
  , 'The complete birdwatching companion': 'O companheiro completo para a observação de aves', 'for Portugal.': 'para Portugal.'
  , 'Example report preview': 'Pré-visualização de relatório', 'Ria Formosa · A planned Followbirds guide output': 'Ria Formosa · Um resultado planeado para guias Followbirds'
  , 'Species Observed': 'Espécies observadas', 'Participants': 'Participantes', 'Includes:': 'Inclui:', 'Tour details': 'Detalhes do passeio', 'Guide & date': 'Guia e data', 'Route map': 'Mapa da rota', 'Species observed': 'Espécies observadas', 'Photos': 'Fotografias', 'Guide notes': 'Notas do guia', 'Weather conditions': 'Condições meteorológicas', '📄 PDF Export': '📄 Exportação PDF', '🔗 Shareable Link': '🔗 Ligação partilhável', '📖 Followbirds History': '📖 Histórico Followbirds'
});

Object.assign(translations.es, {
  'We are building the essential tools around the moments that make a great birding tour.': 'Estamos creando las herramientas esenciales para los momentos que hacen especial una ruta de aves.',
  'Set up the route, checklist, and guest details before you leave.': 'Prepara la ruta, la lista y los datos de los visitantes antes de salir.',
  'Record each sighting once while guests follow the same shared experience.': 'Registra cada observación una vez mientras los visitantes comparten la misma experiencia.',
  'Turn the day into a polished summary guests can revisit and share.': 'Convierte el día en un resumen cuidado que los visitantes puedan revisar y compartir.',
  'We are building Followbirds with guides who want a simpler way to run tours and give every guest something worth keeping.': 'Estamos creando Followbirds con guías que quieren una forma más sencilla de organizar rutas y ofrecer a cada visitante algo que merezca la pena guardar.',
  'Built with founding guides': 'Creado con guías fundadores',
  'Shape what comes next': 'Ayuda a dar forma a lo que viene',
  'Early access, direct input, and priority support': 'Acceso anticipado, opinión directa y soporte prioritario',
  'Reusable tour setup': 'Configuración reutilizable de la ruta', 'Shared live checklist': 'Lista compartida en directo', 'Client-ready follow-up': 'Seguimiento listo para clientes', 'One place for tour history': 'Un solo lugar para el historial de rutas',
  'The current Followbirds app helps guests explore the Algarve, identify birds, find tracks, and keep their own checklist.': 'La aplicación actual de Followbirds ayuda a los visitantes a explorar el Algarve, identificar aves, encontrar recorridos y mantener su propia lista.',
  'Offline Algarve bird catalogue': 'Catálogo de aves del Algarve sin conexión', 'Bird names in six languages': 'Nombres de aves en seis idiomas', 'Tracks, maps, and birding locations': 'Recorridos, mapas y lugares de observación', 'Nearby observations through eBird': 'Observaciones cercanas a través de eBird', 'Personal checklists and bird history': 'Listas personales e historial de aves',
  'The planned Followbirds report will bring together species, route, photos, notes, and guest memories in one shareable follow-up.': 'El informe previsto de Followbirds reunirá especies, ruta, fotos, notas y recuerdos de los visitantes en un único seguimiento compartible.',
  'Tour details and route': 'Detalles y ruta', 'Species and sightings': 'Especies y observaciones', 'Photos and guide notes': 'Fotos y notas del guía', 'Shareable guest summary': 'Resumen compartible para visitantes',
  'What is Followbirds?': '¿Qué es Followbirds?', 'What is available today?': '¿Qué está disponible hoy?', 'Who is the founding guide program for?': '¿Para quién es el programa fundador?', 'Will the guide module be available immediately?': '¿Estará disponible inmediatamente el módulo para guías?', 'Who can become a guide?': '¿Quién puede ser guía?',
  'Followbirds is building a guide-first workspace for creating tours, sharing sightings, and giving guests a valuable follow-up experience.': 'Followbirds está creando un espacio de trabajo pensado para guías, para organizar rutas, compartir observaciones y ofrecer a los visitantes una experiencia final valiosa.',
  'The birdwatcher app is available today with Algarve tracks, maps, bird information, eBird Nearby, and personal checklists. The guide workspace is being built with founding guides.': 'La aplicación para observadores ya está disponible con recorridos del Algarve, mapas, información sobre aves, eBird Nearby y listas personales. El espacio de trabajo para guías se está creando con guías fundadores.',
  'It is for birding professionals and enthusiastic guides who run tours and want to shape the first version of the Followbirds guide workspace.': 'Está dirigido a profesionales de la observación y guías entusiastas que organizan rutas y quieren ayudar a definir la primera versión del espacio de trabajo para guías de Followbirds.',
  'Not yet. Founding guides will help us validate the workflow, test early versions, and receive priority access as the module launches.': 'Todavía no. Los guías fundadores nos ayudarán a validar el flujo de trabajo, probar las primeras versiones y recibirán acceso prioritario cuando se lance el módulo.',
  'Any birding professional or enthusiastic guide who leads tours in Portugal can apply. Email': 'Cualquier profesional de la observación o guía entusiasta que organice rutas en Portugal puede solicitarlo. Escribe a',
  'Explore': 'Explorar', 'For birdwatchers': 'Para observadores', 'Tour reports': 'Informes de rutas', 'Guide workspace': 'Espacio de trabajo del guía', 'Join the program': 'Únete al programa', 'Open the web app': 'Abrir la aplicación web', 'Support': 'Ayuda', 'Contact us': 'Contacta con nosotros', 'Privacy policy': 'Política de privacidad'
  , 'The complete birdwatching companion': 'El compañero completo para la observación de aves', 'for Portugal.': 'para Portugal.'
  , 'Example report preview': 'Vista previa del informe', 'Ria Formosa · A planned Followbirds guide output': 'Ria Formosa · Un resultado previsto para guías de Followbirds'
  , 'Species Observed': 'Especies observadas', 'Participants': 'Participantes', 'Includes:': 'Incluye:', 'Tour details': 'Detalles de la ruta', 'Guide & date': 'Guía y fecha', 'Route map': 'Mapa de la ruta', 'Species observed': 'Especies observadas', 'Photos': 'Fotos', 'Guide notes': 'Notas del guía', 'Weather conditions': 'Condiciones meteorológicas', '📄 PDF Export': '📄 Exportación PDF', '🔗 Shareable Link': '🔗 Enlace compartible', '📖 Followbirds History': '📖 Historial de Followbirds'
});

Object.assign(translations.ca, {
  'We are building the essential tools around the moments that make a great birding tour.': 'Estem creant les eines essencials per als moments que fan especial una sortida d’observació.',
  'Set up the route, checklist, and guest details before you leave.': 'Prepara la ruta, la llista i les dades dels visitants abans de sortir.',
  'Record each sighting once while guests follow the same shared experience.': 'Registra cada observació una vegada mentre els visitants comparteixen la mateixa experiència.',
  'Turn the day into a polished summary guests can revisit and share.': 'Converteix el dia en un resum acurat que els visitants puguin revisar i compartir.',
  'We are building Followbirds with guides who want a simpler way to run tours and give every guest something worth keeping.': 'Estem creant Followbirds amb guies que volen una manera més senzilla d’organitzar sortides i oferir a cada visitant quelcom que valgui la pena conservar.',
  'Built with founding guides': 'Creat amb guies fundadors',
  'Shape what comes next': 'Ajuda a donar forma al que ve',
  'Early access, direct input, and priority support': 'Accés anticipat, opinió directa i suport prioritari',
  'Reusable tour setup': 'Configuració reutilitzable de la sortida', 'Shared live checklist': 'Llista compartida en directe', 'Client-ready follow-up': 'Seguiment preparat per als clients', 'One place for tour history': 'Un sol lloc per a l’historial de sortides',
  'The current Followbirds app helps guests explore the Algarve, identify birds, find tracks, and keep their own checklist.': 'L’aplicació actual de Followbirds ajuda els visitants a explorar l’Algarve, identificar aus, trobar recorreguts i mantenir la seva pròpia llista.',
  'Offline Algarve bird catalogue': 'Catàleg d’aus de l’Algarve sense connexió', 'Bird names in six languages': 'Noms d’aus en sis idiomes', 'Tracks, maps, and birding locations': 'Recorreguts, mapes i llocs d’observació', 'Nearby observations through eBird': 'Observacions properes amb eBird', 'Personal checklists and bird history': 'Llistes personals i historial d’aus',
  'The planned Followbirds report will bring together species, route, photos, notes, and guest memories in one shareable follow-up.': 'L’informe previst de Followbirds reunirà espècies, ruta, fotografies, notes i records dels visitants en un únic seguiment compartible.',
  'Tour details and route': 'Detalls i ruta de la sortida', 'Species and sightings': 'Espècies i observacions', 'Photos and guide notes': 'Fotografies i notes del guia', 'Shareable guest summary': 'Resum compartible per als visitants',
  'What is Followbirds?': 'Què és Followbirds?', 'What is available today?': 'Què està disponible avui?', 'Who is the founding guide program for?': 'Per a qui és el programa fundador?', 'Will the guide module be available immediately?': 'El mòdul per a guies estarà disponible immediatament?', 'Who can become a guide?': 'Qui pot ser guia?',
  'Followbirds is building a guide-first workspace for creating tours, sharing sightings, and giving guests a valuable follow-up experience.': 'Followbirds està creant un espai de treball pensat per als guies, per organitzar sortides, compartir observacions i oferir als visitants una experiència final valuosa.',
  'The birdwatcher app is available today with Algarve tracks, maps, bird information, eBird Nearby, and personal checklists. The guide workspace is being built with founding guides.': 'L’aplicació per a observadors ja està disponible amb recorreguts de l’Algarve, mapes, informació sobre aus, eBird Nearby i llistes personals. L’espai de treball per a guies s’està creant amb guies fundadors.',
  'It is for birding professionals and enthusiastic guides who run tours and want to shape the first version of the Followbirds guide workspace.': 'És per a professionals de l’observació i guies entusiastes que organitzen sortides i volen ajudar a definir la primera versió de l’espai de treball per a guies de Followbirds.',
  'Not yet. Founding guides will help us validate the workflow, test early versions, and receive priority access as the module launches.': 'Encara no. Els guies fundadors ens ajudaran a validar el flux de treball, provar les primeres versions i tindran accés prioritari quan es llanci el mòdul.',
  'Any birding professional or enthusiastic guide who leads tours in Portugal can apply. Email': 'Qualsevol professional de l’observació o guia entusiasta que organitzi sortides a Portugal s’hi pot presentar. Escriu a',
  'Explore': 'Explora', 'For birdwatchers': 'Per a observadors', 'Tour reports': 'Informes de sortides', 'Guide workspace': 'Espai de treball del guia', 'Join the program': 'Uneix-te al programa', 'Open the web app': 'Obre l’aplicació web', 'Support': 'Ajuda', 'Contact us': 'Contacta amb nosaltres', 'Privacy policy': 'Política de privacitat'
  , 'The complete birdwatching companion': 'El company complet per a l’observació d’aus a Portugal.', 'for Portugal.': ''
  , 'Example report preview': 'Previsualització de l’informe', 'Ria Formosa · A planned Followbirds guide output': 'Ria Formosa · Un resultat previst per a guies de Followbirds'
  , 'Species Observed': 'Espècies observades', 'Participants': 'Participants', 'Includes:': 'Inclou:', 'Tour details': 'Detalls de la sortida', 'Guide & date': 'Guia i data', 'Route map': 'Mapa de la ruta', 'Species observed': 'Espècies observades', 'Photos': 'Fotografies', 'Guide notes': 'Notes del guia', 'Weather conditions': 'Condicions meteorològiques', '📄 PDF Export': '📄 Exportació PDF', '🔗 Shareable Link': '🔗 Enllaç compartible', '📖 Followbirds History': '📖 Historial de Followbirds'
});

Object.assign(translations.pt, {
  'Guide workspace and Tour Reports are in development, not available yet. Founding guides help shape the first release. The live product today is the Algarve birdwatcher app.': 'O espaço de trabalho do guia e os Relatórios de Passeio estão em desenvolvimento e ainda não estão disponíveis. Os guias fundadores ajudam a definir a primeira versão. O produto disponível hoje é a aplicação para observadores do Algarve.',
  'Planned': 'Planeado',
  'Planned: guide workspace': 'Planeado: espaço de trabalho do guia'
});

Object.assign(translations.es, {
  'Guide workspace and Tour Reports are in development, not available yet. Founding guides help shape the first release. The live product today is the Algarve birdwatcher app.': 'El espacio de trabajo del guía y los Informes de Ruta están en desarrollo y aún no están disponibles. Los guías fundadores ayudan a definir la primera versión. El producto disponible hoy es la aplicación para observadores del Algarve.',
  'Planned': 'Previsto',
  'Planned: guide workspace': 'Previsto: espacio de trabajo del guía'
});

Object.assign(translations.ca, {
  'Guide workspace and Tour Reports are in development, not available yet. Founding guides help shape the first release. The live product today is the Algarve birdwatcher app.': 'L\'espai de treball del guia i els Informes de Sortida estan en desenvolupament i encara no estan disponibles. Els guies fundadors ajuden a definir la primera versió. El producte disponible avui és l\'aplicació per a observadors de l\'Algarve.',
  'Planned': 'Previst',
  'Planned: guide workspace': 'Previst: espai de treball del guia'
});

function translate(locale: Locale) {
  document.documentElement.lang = locale;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node: Text | null;

  while ((node = walker.nextNode() as Text | null)) {
    const parent = node.parentElement;
    if (!parent || ['SCRIPT', 'STYLE', 'SELECT', 'OPTION'].includes(parent.tagName)) continue;

    const original = originalText.get(node) ?? node.textContent ?? '';
    const key = original.trim();
    const translated = locale === 'en'
      ? key
      : (translations[locale][key] ?? translations[locale][key.replaceAll('Followbirds', 'followbirds')]);
    if (translated === undefined) continue;

    originalText.set(node, original);
    const leading = original.match(/^\s*/)?.[0] ?? '';
    const trailing = original.match(/\s*$/)?.[0] ?? '';
    node.textContent = `${leading}${translated}${trailing}`;
  }

  const languageLabel = document.querySelector<HTMLLabelElement>('label[for="language-select"]');
  languageLabel?.replaceChildren(document.createTextNode(locale === 'en' ? 'Language' : translations[locale].Language));
}

select?.addEventListener('change', () => {
  const locale = select.value as Locale;
  localStorage.setItem(storageKey, locale);
  translate(locale);
});

if (select) {
  const storedLocale = localStorage.getItem(storageKey) as Locale | null;
  const locale = storedLocale && ['en', 'pt', 'es', 'ca'].includes(storedLocale) ? storedLocale : 'en';
  select.value = locale;
  translate(locale);
}
