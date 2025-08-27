const states = {
  OR: {
  name: "Oregon",
  description:
    "Oregon, the Beaver State, is known for its progressive politics, lush forests, and strong environmentalist values. A solidly Democratic state, Oregon has consistently supported progressive policies on healthcare, climate change, and social justice.",
  leaders: [
{ name: "Governor Tina Kotek", party: "D", image: "/kotek.jpg", link: "/leader/kotek" },    
{ name: "Senator Ron Wyden", party: "D", image: "/wyden.jpeg", link: "/leader/wyden" },    
{ name: "Senator Jeff Merkley", party: "D", image: "/merkley.jpg", link: "/leader/merkley" },
  ],
  scales: [
    ["Progressive", "Conservative", "10%"],
    ["Pro-Environment", "Pro-Industry", "8%"],
    ["Immigration-Friendly", "Restrictive", "15%"],
    ["Social Libertarian", "Social Traditionalist", "10%"],
  ],
},
  CA: {
    name: "California",
    description:
      "California, the Golden State, is known for its liberal values and diverse culture...",
    leaders: [
      { name: "Governor Gavin Newsom", party: "D", image: "/newsom.jpg", link: "/leader/newsom" },
      { name: "Senator Alex Padilla", party: "D", image: "/padilla.jpg", link: "/leader/padilla" },
      { name: "Senator Adam Schiff", party: "D", image: "/schiff.jpg", link: "/leader/schiff" },
    ],
  },
  HI: {
  name: "Hawaii",
  description:
    "Hawaii, admitted in 1959, is known for its strong Democratic leanings and progressive values. The state consistently supports environmental protection, native Hawaiian rights, and universal healthcare. Its leadership reflects a deep commitment to social equity and sustainability.",
  leaders: [
    { name: "Governor Josh Green", party: "D", image: "/green.jpg", link: "/leader/green" },
    { name: "Senator Mazie Hirono", party: "D", image: "/hirono.jpg", link: "/leader/hirono" },
    { name: "Senator Brian Schatz", party: "D", image: "/schatz.jpg", link: "/leader/schatz" },
  ],
  scales: [
    ["Progressive", "Conservative", "10%"],
    ["Pro-Environment", "Pro-Industry", "5%"],
    ["Immigration-Friendly", "Restrictive", "10%"],
    ["Social Libertarian", "Social Traditionalist", "15%"],
  ],
},
AK: {
  name: "Alaska",
  description:
    "Alaska, admitted in 1959, is known for its independent political streak and strong support for natural resource development. While leaning Republican in national races, Alaska voters have occasionally supported moderates and independent-minded leaders. The state prioritizes energy policy, indigenous rights, and fiscal conservatism.",
  leaders: [
    { name: "Governor Mike Dunleavy", party: "R", image: "/dunleavy.jpg", link: "/leader/dunleavy" },
    { name: "Senator Lisa Murkowski", party: "R", image: "/murkowski.jpg", link: "/leader/murkowski" },
    { name: "Senator Dan Sullivan", party: "R", image: "/sullivan.jpg", link: "/leader/sullivan" },
  ],
  scales: [
    ["Progressive", "Conservative", "75%"],
    ["Pro-Environment", "Pro-Industry", "80%"],
    ["Immigration-Friendly", "Restrictive", "60%"],
    ["Social Libertarian", "Social Traditionalist", "55%"],
  ],
},
WA: {
  name: "Washington",
  description:
    "Washington, admitted in 1889, is a progressive stronghold known for its commitment to environmental sustainability, tech-driven economic growth, and robust social policies. With a long history of Democratic leadership, Washington continues to lead in climate action and inclusive governance.",
  leaders: [
    { name: "Governor Jay Inslee", party: "D", image: "/inslee.jpg", link: "/leader/inslee" },
    { name: "Senator Patty Murray", party: "D", image: "/murray.jpg", link: "/leader/murray" },
    { name: "Senator Maria Cantwell", party: "D", image: "/cantwell.jpg", link: "/leader/cantwell" },
  ],
  scales: [
    ["Progressive", "Conservative", "15%"],
    ["Pro-Environment", "Pro-Industry", "10%"],
    ["Immigration-Friendly", "Restrictive", "12%"],
    ["Social Libertarian", "Social Traditionalist", "20%"],
  ],
},
NV: {
  name: "Nevada",
  description:
    "Nevada, admitted in 1864, is known for its dynamic mix of libertarian and progressive values, driven by tourism, mining, and a rapidly growing diverse population. Swinging between both parties in recent years, Nevada remains a key battleground state with an independent-minded electorate.",
  leaders: [
    { name: "Governor Joe Lombardo", party: "R", image: "/lombardo.jpg", link: "/leader/lombardo" },
    { name: "Senator Catherine Cortez Masto", party: "D", image: "/masto.jpg", link: "/leader/masto" },
    { name: "Senator Jacky Rosen", party: "D", image: "/rosen.jpg", link: "/leader/rosen" },
  ],
  scales: [
    ["Progressive", "Conservative", "45%"],
    ["Pro-Environment", "Pro-Industry", "50%"],
    ["Immigration-Friendly", "Restrictive", "40%"],
    ["Social Libertarian", "Social Traditionalist", "45%"],
  ],
},
UT: {
  name: "Utah",
  description:
    "Utah, the Beehive State, is a deeply conservative stronghold known for its strong religious values, emphasis on family, and robust support for pro-business policies. While reliably Republican, Utah has also shown streaks of independent-minded voting, particularly in recent years.",
  leaders: [
    { name: "Governor Spencer Cox", party: "R", image: "/cox.jpg", link: "/leader/cox" },
    { name: "Senator John Curtis", party: "R", image: "/curtis.jpg", link: "/leader/curtis" },
    { name: "Senator Mike Lee", party: "R", image: "/lee.jpg", link: "/leader/lee" },
  ],
  scales: [
    ["Progressive", "Conservative", "80%"],
    ["Pro-Environment", "Pro-Industry", "75%"],
    ["Immigration-Friendly", "Restrictive", "70%"],
    ["Social Libertarian", "Social Traditionalist", "80%"],
  ],
},
ID: {
  name: "Idaho",
  description:
    "Idaho, the Gem State, is deeply conservative and known for its rugged individualism, strong agricultural traditions, and commitment to states' rights. Its political culture strongly favors limited government and economic freedom.",
  leaders: [
    { name: "Governor Brad Little", party: "R", image: "/little.jpg", link: "/leader/little" },
    { name: "Senator Mike Crapo", party: "R", image: "/crapo.jpg", link: "/leader/crapo" },
    { name: "Senator Jim Risch", party: "R", image: "/risch.jpg", link: "/leader/risch" },
  ],
  scales: [
    ["Progressive", "Conservative", "90%"],
    ["Pro-Environment", "Pro-Industry", "85%"],
    ["Immigration-Friendly", "Restrictive", "80%"],
    ["Social Libertarian", "Social Traditionalist", "85%"],
  ],
},
WY: {
  name: "Wyoming",
  description:
    "Wyoming, the Cowboy State, is one of the most conservative and reliably Republican states in the nation. With its strong emphasis on individual liberty, energy independence, and rural traditions, Wyoming consistently champions limited government and pro-industry policies.",
  leaders: [
    { name: "Governor Mark Gordon", party: "R", image: "/gordon.jpg", link: "/leader/gordon" },
    { name: "Senator John Barrasso", party: "R", image: "/barrasso.jpg", link: "/leader/barrasso" },
    { name: "Senator Cynthia Lummis", party: "R", image: "/lummis.jpg", link: "/leader/lummis" },
  ],
  scales: [
    ["Progressive", "Conservative", "95%"],
    ["Pro-Environment", "Pro-Industry", "90%"],
    ["Immigration-Friendly", "Restrictive", "85%"],
    ["Social Libertarian", "Social Traditionalist", "90%"],
  ],
},
MT: {
  name: "Montana",
  description:
    "Montana, the Treasure State, is known for its independent spirit and mix of conservative and populist politics. While leaning Republican in presidential elections, Montana voters have shown a willingness to elect Democrats to statewide offices, valuing individualism and local control.",
  leaders: [
    { name: "Governor Greg Gianforte", party: "R", image: "/gianforte.jpg", link: "/leader/gianforte" },
    { name: "Senator Tim Sheehy", party: "R", image: "/sheehy.jpg", link: "/leader/sheehy" },
    { name: "Senator Steve Daines", party: "R", image: "/daines.jpg", link: "/leader/daines" },
  ],
  scales: [
    ["Progressive", "Conservative", "55%"],
    ["Pro-Environment", "Pro-Industry", "60%"],
    ["Immigration-Friendly", "Restrictive", "65%"],
    ["Social Libertarian", "Social Traditionalist", "60%"],
  ],
},
ND: {
  name: "North Dakota",
  description:
    "North Dakota, the Peace Garden State, is a solidly Republican stronghold known for its agricultural dominance and energy production. The state emphasizes conservative values, economic freedom, and a strong commitment to rural communities.",
  leaders: [
{ name: "Governor Kelly Armstrong", party: "R", image: "/armstrong.jpg", link: "/leader/armstrong" },
    { name: "Senator John Hoeven", party: "R", image: "/hoeven.jpg", link: "/leader/hoeven" },
    { name: "Senator Kevin Cramer", party: "R", image: "/cramer.jpg", link: "/leader/cramer" },
  ],
  scales: [
    ["Progressive", "Conservative", "90%"],
    ["Pro-Environment", "Pro-Industry", "95%"],
    ["Immigration-Friendly", "Restrictive", "75%"],
    ["Social Libertarian", "Social Traditionalist", "80%"],
  ],
},
SD: {
  name: "South Dakota",
  description:
    "South Dakota, the Mount Rushmore State, is a reliably Republican stronghold known for its agriculture, ranching, and deep-rooted conservative values. The state emphasizes small government, individual freedoms, and support for rural communities.",
  leaders: [
    { name: "Governor Larry Rhoden", party: "R", image: "/rhoden.jpg", link: "/leader/rhoden" },
    { name: "Senator John Thune", party: "R", image: "/thune.webp", link: "/leader/thune" },
    { name: "Senator Mike Rounds", party: "R", image: "/rounds.jpg", link: "/leader/rounds" },
  ],
  scales: [
    ["Progressive", "Conservative", "90%"],
    ["Pro-Environment", "Pro-Industry", "85%"],
    ["Immigration-Friendly", "Restrictive", "75%"],
    ["Social Libertarian", "Social Traditionalist", "80%"],
  ],
},
AZ: {
  name: "Arizona",
  description:
    "Arizona, a competitive state with a diverse electorate and growing urban centers, leans Democratic in recent statewide elections. It prioritizes water rights, border security, renewable energy, and public health.",
  leaders: [
    { name: "Governor Katie Hobbs", party: "D", image: "/hobbs.jpg", link: "/leader/hobbs" },
    { name: "Senator Mark Kelly", party: "D", image: "/kelly.jpg", link: "/leader/kelly" },
    { name: "Senator Ruben Gallego", party: "D", image: "/gallego.jpg", link: "/leader/gallego" },
  ],
  scales: [
    ["Progressive", "Conservative", "40%"],
    ["Pro-Environment", "Pro-Industry", "45%"],
    ["Immigration-Friendly", "Restrictive", "30%"],
    ["Social Libertarian", "Social Traditionalist", "50%"],
  ],
},
NM: {
  name: "New Mexico",
  description:
    "New Mexico, known as the Land of Enchantment, is a strongly Democratic state emphasizing environmental protection, cultural diversity, and indigenous rights. Its leaders prioritize renewable energy, healthcare access, and economic development in rural communities.",
  leaders: [
    { name: "Governor Michelle Lujan Grisham", party: "D", image: "/grisham.jpg", link: "/leader/grisham" },
    { name: "Senator Martin Heinrich", party: "D", image: "/heinrich.jpg", link: "/leader/heinrich" },
    { name: "Senator Ben Ray Luján", party: "D", image: "/raylujan.jpg", link: "/leader/raylujan" },
  ],
  scales: [
    ["Progressive", "Conservative", "25%"],
    ["Pro-Environment", "Pro-Industry", "20%"],
    ["Immigration-Friendly", "Restrictive", "20%"],
    ["Social Libertarian", "Social Traditionalist", "25%"],
  ],
},
CO: {
  name: "Colorado",
  description:
    "Colorado, the Centennial State, is known for its purple past but has shifted strongly Democratic in recent years. With a focus on environmental protection, outdoor recreation, and progressive social policies, Colorado is a leader in renewable energy and public health reforms.",
  leaders: [
    { name: "Governor Jared Polis", party: "D", image: "/polis.jpg", link: "/leader/polis" },
    { name: "Senator Michael Bennet", party: "D", image: "/bennet.jpg", link: "/leader/bennet" },
    { name: "Senator John Hickenlooper", party: "D", image: "/hickenlooper.jpeg", link: "/leader/hickenlooper" },
  ],
  scales: [
    ["Progressive", "Conservative", "25%"],
    ["Pro-Environment", "Pro-Industry", "20%"],
    ["Immigration-Friendly", "Restrictive", "20%"],
    ["Social Libertarian", "Social Traditionalist", "25%"],
  ],
},



};


export default states;
