import { Fragment } from "react";

// Static Data
const locationsData = [
    {
      title: "Latin America",
      locations: [
        { name: "Mexico", value: 669 },
        { name: "Costa Rica", value: 440 },
        { name: "Peru", value: 419 },
        { name: "Colombia", value: 202 },
        { name: "Ecuador", value: 83 },
        { name: "Brazil", value: 54 },
        { name: "Guatemala", value: 49 },
        { name: "Jamaica", value: 30 },
        { name: "Nicaragua", value: 11 },
        { name: "Bolivia", value: 8 },
        { name: "Paraguay", value: 6 },
        { name: "Nayarit (Mexico)", value: 298 },
        { name: "Quintana Roo (Tulum)", value: 225 },
        { name: "Antioquia (Medellin)", value: 161 },
        { name: "Puntarenas", value: 100 },
        { name: "Cusco", value: 94 },
        { name: "Guanacaste", value: 60 },
        { name: "Azuay (Cuenca)", value: 37 },
        { name: "Oaxaca", value: 31 },
        { name: "Ucayali", value: 26 },
        { name: "Putumayo", value: 14 },
        { name: "Madre de Dios", value: 10 },
      ],
    },
    {
      title: "Europe",
      locations: [
        { name: "Spain", value: 635 },
        { name: "Netherlands", value: 319 },
        { name: "Portugal", value: 197 },
        { name: "Germany", value: 105 },
        { name: "United Kingdom", value: 92 },
        { name: "Italy", value: 64 },
        { name: "France", value: 56 },
        { name: "Greece", value: 43 },
        { name: "Malta", value: 25 },
        { name: "Sweden", value: 22 },
        { name: "Switzerland", value: 7 },
        { name: "Belgium", value: 6 },
        { name: "Austria", value: 3 },
        { name: "Ireland", value: 3 },
        { name: "Andalusia", value: 284 },
        { name: "Valencian Community", value: 87 },
        { name: "England", value: 55 },
        { name: "Faro", value: 52 },
        { name: "Catalonia", value: 41 },
        { name: "Balearic Islands", value: 38 },
        { name: "Canary Islands", value: 33 },
        { name: "Scotland", value: 20 },
        { name: "Coimbra", value: 19 },
        { name: "Lisbon", value: 15 },
        { name: "Umbria", value: 11 },
      ],
    },
    {
      title: "USA & Canada",
      locations: [
        { name: "United States", value: 810 },
        { name: "Canada", value: 90 },
        { name: "California", value: 160 },
        { name: "Arizona", value: 117 },
        { name: "New York", value: 98 },
        { name: "Massachusetts", value: 53 },
        { name: "Virginia", value: 47 },
        { name: "Florida", value: 46 },
        { name: "Oregon", value: 40 },
        { name: "Hawaii", value: 36 },
        { name: "British Columbia", value: 33 },
        { name: "Washington", value: 23 },
        { name: "Maine", value: 22 },
        { name: "Colorado", value: 21 },
        { name: "Pennsylvania", value: 19 },
        { name: "North Carolina", value: 17 },
        { name: "Texas", value: 12 },
        { name: "Quebec", value: 11 },
        { name: "Alberta", value: 10 },
      ],
    },
    {
      title: "Asia, Oceania & Africa",
      locations: [
        { name: "India", value: 343 },
        { name: "Indonesia", value: 136 },
        { name: "Australia", value: 85 },
        { name: "Cambodia", value: 27 },
        { name: "Egypt", value: 14 },
        { name: "China", value: 8 },
        { name: "Uttarakhand", value: 156 },
        { name: "Bali", value: 133 },
        { name: "Goa", value: 115 },
        { name: "Kerala", value: 18 },
        { name: "Himachal Pradesh", value: 12 },
        { name: "Tamil Nadu", value: 11 },
      ],
    },
  ],
  popularTopicsData = [
    {
      title: "Healing & Recovery",
      topics: [
        { name: "Emotional Healing", value: 1249 },
        { name: "Stress Management", value: 957 },
        { name: "Trauma Healing", value: 940 },
        { name: "Anxiety Relief", value: 707 },
        { name: "Somatic Therapy", value: 671 },
        { name: "Depression Recovery", value: 642 },
        { name: "Addiction Recovery", value: 571 },
        { name: "PTSD Recovery", value: 280 },
        { name: "Grief & Bereavement", value: 129 },
        { name: "Burnout Recovery", value: 105 },
        { name: "Chronic Pain", value: 58 },
      ],
    },
    {
      title: "Health & Wellness",
      topics: [
        { name: "Nature", value: 2730 },
        { name: "Health", value: 2332 },
        { name: "Holistic", value: 1247 },
        { name: "Breathwork", value: 1018 },
        { name: "Detox", value: 783 },
        { name: "Music", value: 670 },
        { name: "Art", value: 562 },
        { name: "Massage", value: 559 },
        { name: "Wellness", value: 352 },
        { name: "Dance", value: 304 },
        { name: "Fasting", value: 202 },
        { name: "Ayurveda", value: 151 },
        { name: "Writing", value: 151 },
        { name: "Mental Health", value: 133 },
        { name: "Movement & Fitness", value: 122 },
        { name: "Qigong", value: 106 },
        { name: "Pilates", value: 76 },
        { name: "Nutrition & Food", value: 69 },
        { name: "Surf", value: 64 },
        { name: "Weight Loss", value: 41 },
        { name: "Spa", value: 18 },
        { name: "Death & Grieving", value: 4 },
        { name: "Reike", value: 1 },
      ],
    },
    {
      title: "Plant Medicine",
      topics: [
        { name: "Ayahuasca", value: 997 },
        { name: "Psilocybin", value: 887 },
        { name: "Mushroom", value: 617 },
        { name: "Cacao", value: 368 },
        { name: "Dieta", value: 181 },
        { name: "Truffle", value: 138 },
        { name: "Microdosing", value: 126 },
        { name: "San Pedro Huachuma", value: 124 },
        { name: "Iboga", value: 122 },
        { name: "Ibogaine", value: 114 },
        { name: "Shamanic", value: 73 },
        { name: "Bufo", value: 66 },
        { name: "Kambo", value: 47 },
        { name: "Preparation/Integration", value: 37 },
        { name: "Cannabis", value: 20 },
        { name: "MDMA", value: 13 },
        { name: "5-MEO-DMT", value: 12 },
        { name: "DMT", value: 9 },
        { name: "LSD", value: 7 },
        { name: "Peyote", value: 6 },
        { name: "Ketamine", value: 4 },
      ],
    },
    {
      title: "Other",
      topics: [
        { name: "Luxury", value: 726 },
        { name: "Online", value: 434 },
        { name: "Spiritual", value: 183 },
        { name: "Affordable", value: 123 },
        { name: "Marriage & Couples", value: 67 },
        { name: "Women's", value: 62 },
        { name: "Christian", value: 57 },
        { name: "Leadership Training", value: 32 },
        { name: "Gay Men", value: 18 },
        { name: "Social Change", value: 13 },
        { name: "Men's", value: 12 },
        { name: "LGBTQ", value: 10 },
        { name: "Tantric Sex", value: 8 },
        { name: "Trans", value: 4 },
      ],
    },
    {
      title: "Yoga",
      topics: [
        { name: "Yoga & Meditation", value: 230 },
        { name: "Yoga Teacher Training", value: 198 },
        { name: "Yoga", value: 131 },
        { name: "Yoga for Beginners", value: 86 },
        { name: "Tantra Yoga", value: 54 },
        { name: "Yoga for Kids", value: 30 },
        { name: "Kundalini Yoga", value: 25 },
        { name: "Sivananda Yoga", value: 22 },
        { name: "Hatha Yoga", value: 18 },
        { name: "Vinyasa Yoga", value: 12 },
        { name: "Yoga Nidra", value: 11 },
        { name: "Aerial Yoga & Acro Yoga", value: 9 },
        { name: "Yin & Restorative Yoga", value: 9 },
        { name: "Ashtanga Yoga", value: 7 },
        { name: "Yoga for Seniors", value: 7 },
        { name: "Prenatal Yoga", value: 3 },
        { name: "Iyengar Yoga", value: 2 },
      ],
    },
    {
      title: "Meditation",
      topics: [
        { name: "Meditation", value: 125 },
        { name: "Dark", value: 121 },
        { name: "Silent", value: 72 },
        { name: "Mindfulness", value: 43 },
        { name: "IFS", value: 38 },
        { name: "Buddhist", value: 32 },
        { name: "Zen", value: 12 },
        { name: "Vipassana", value: 6 },
      ],
    },
  ];

function IndexPage() {
  return (
    <Fragment>
      <div className="flex flex-col gap-4 w-full h-max bg-[#F8F9FA]">
        <div className="w-full h-max p-10 flex flex-col gap-4.5">
          <h1 className="text-2xl font-semibold text-[#1A3A52]">Locations</h1>
          {locationsData.map((loc, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <p className="font-medium text-md text-[#1A3A52]">
                {loc.title} ({loc.locations.reduce((a, b) => a + b.value, 0)})
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-[#4A7C9E] text-xs">
                {loc.locations.map((loc, idx2) => (
                  <p key={idx2}>
                    {loc.name} ({loc.value})
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-max p-10 flex flex-col gap-4.5">
          <h1 className="text-2xl font-semibold text-[#1A3A52]">
            Popular Topics
          </h1>
          {popularTopicsData.map((topics, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <p className="font-medium text-md text-[#1A3A52]">
                {topics.title} ({topics.topics.reduce((a, b) => a + b.value, 0)}
                )
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-[#4A7C9E] text-xs">
                {topics.topics.map((topic, idx2) => (
                  <p key={idx2}>
                    {topic.name} ({topic.value})
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default IndexPage;