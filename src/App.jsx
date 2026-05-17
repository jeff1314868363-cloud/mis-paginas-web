import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import {
  RefreshCw,
  Eye,
  EyeOff,
  Stethoscope,
  Beaker,
  Sparkles,
  Trophy,
  Activity,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

/* =========================
   CONFIGURACIÓN DEL TABLERO
========================= */
const ROWS = 14;
const COLS = 15;

/* =========================
   GLOSARIO COMPLETO (PRESERVADO 100%)
   +900 palabras / invertidas / abreviaturas / elementos
========================= */
const RAW_GLOSSARY = `
Apgar
Baby
Birth
Colic
Croup
Child
Dose
Duct
Ear
Eye
Fever
Flu
Germ
Gut
Heart
Hib
HPV
Infant
IV
Itch
Joint
Knee
Liver
Lung
Lump
Mask
Mist
Moro
Mumps
NICU
Nose
Nurse
Oral
Pain
Pill
PICU
Polio
Pump
Rash
RSV
Shot
Skin
Spot
Strep
Suck
Syrup
Teen
Throat
Tube
Vent
Acne
Acute
Adenoid
Advil
Age
Albumin
Allergy
Amoxil
Anemia
Ankle
Aorta
Apnea
Artery
Asthma
Atopic
Atrium
Autism
Awake
B-cell
Back
Basophil
BCG
Belly
Bile
Biopsy
Bladder
Blast
Bleed
Blood
Body
Bone
Bowel
Brain
Breast
Breath
Bruise
Burn
Calcium
Canal
Cancer
Cap
Cardiac
Caries
Cast
Cell
Chest
Chill
Choke
Chronic
Cilia
Clot
Cocci
Code
Colon
Coma
Core
Cough
Count
Cranial
Cream
Crisis
Crying
CSF
Culture
Cyst
Deaf
Death
Dental
Dermis
Diet
Digest
Diaper
Diphth
Disease
DNA
Doctor
Donor
Drain
Drip
Drug
Dry
Duodenal
Dwarf
Dyspnea
Dysuria
ECG
Eczema
Edema
EEG
Elbow
Embolus
Embryo
EMS
Enamel
Enzyme
Eosin
Epiglott
Epistax
E-coli
Exam
Exhale
Face
Factor
Faint
Fat
Feces
Femur
Fetus
Fibula
Film
Finger
Flank
Fluid
Flush
Flux
Focus
Folic
Food
Foot
Forehead
Form
Fracture
Fungal
Gait
Gall
Gas
Gastric
Gauze
Gene
Genetic
Gland
Glans
Glass
Glucagon
Glucose
Gown
Graft
Gram
Granule
Grip
Groin
Growth
Gum
Hair
Hand
Head
Heal
Health
Hearing
Heel
Hemat
Hep-B
Hernia
Herpes
Hip
Hives
Hormone
Host
Humid
Hydro
Hygiene
Hypoxia
ICU
Ileum
Immune
Incise
Incisor
Inert
Infect
Inhale
Injury
Inner
Insulin
Intake
Iodine
Iris
Iron
Islet
Jaw
Jejunum
Jugular
Kidney
Kilo
Lab
Lactic
Lactose
Larynx
Laser
Lead
Left
Leg
Lens
Lesion
Lethal
Leuko
Level
Lice
Life
Ligament
Light
Limb
Line
Lipid
Lip
Liquid
Lobe
Local
Lotion
Lumbar
Lymph
Lysine
Macro
Malaria
Male
Malign
Marrow
Matter
Meal
Measles
Med
Medium
Meiosis
Melanin
Membrane
Mend
Mental
Mercury
Met-Hb
Micro
Mictur
Midgut
Midline
Milk
Mite
Mitosis
Mitral
Mixed
Mode
Molar
Mole
Month
Mood
Motion
Motor
Mouth
Mucosa
Mucus
Muscle
Mutant
Myelin
Myo
Nail
Naive
Nape
Naris
Nasal
Nausea
Naval
Neck
Needle
Negative
Neonate
Neoplasm
Nerve
Neural
Neuron
Night
Nipple
Nitrate
Node
Nodular
Noise
Normal
Notch
Novel
NSAID
Nucleus
Nurture
Nut
Nutrient
Obese
Occult
Ocular
Odor
Oil
Ointment
Onset
Open
Opioid
Optic
Orbit
Organ
Orifice
Osmosis
Ossicle
Osteo
Otic
Otitis
Outcome
Outlet
Ovary
Ovum
Oxygen
Pace
Pack
Pad
Palate
Pallor
Palm
Palsy
Pancreas
Papilla
Papule
Parotid
Patch
Patent
Pathogen
Patient
Peak
Pelvis
Penis
Pepsin
Peptic
Percent
Period
PET
Pharynx
Phase
Phenol
Phobia
Phlegm
Phos
Physics
Pigment
Pilon
Pink
Pinna
Pitting
Pity
PKU
Placebo
Plague
Plasma
Platelet
Pleura
Plexus
Plug
PMS
Pocket
Point
Poison
Poly
Pore
Portal
Post
Potent
Pox
Preemie
Prefix
Pressure
Prima
Prime
Pro
Probe
Process
Prodrome
Product
Prolapse
Prone
Protein
Proton
Protozoa
Proximal
Pruritus
Pseudo
Psoas
Psych
Ptosis
Puberty
Pubic
Pulmo
Pulse
Pupil
Pure
Purpura
Pus
Pylorus
Pyrexia
Quad
Rabies
Radius
Rales
Range
Rapid
Rate
Ratio
Reaction
Rectal
Rectum
Red
Reflex
Reflux
Region
Relapse
Renal
Repair
Rescue
Reside
Resin
Resound
Rest
Retina
Review
Rh-factor
Rheum
Rhinitis
Rib
Rickets
Rigidity
Risk
Root
Roseola
Rotary
Round
Route
Rubella
Rule
Rupture
Sac
Sacrum
Safe
Saline
Saliva
Salmon
Scale
Scalp
Scab
Scar
Sclera
Scrotum
Scurvy
Seat
Sebum
Second
Seize
Semen
Sense
Sepsis
Septum
Serum
Sex
Shunt
Sialic
Sibilant
Sickle
Side
Sign
Sinus
Site
Size
Sleep
Sling
Small
Smell
Sneezing
Soap
Sodium
Soft
Sole
Solid
Soma
Sore
Sound
Spasm
Speech
Sperm
Sphincter
Spine
Spleen
Splint
Sponge
Spore
Sprain
Spray
Sputum
Squamous
Stable
Stage
Stain
Staph
Stasis
Stat
Status
Stem
Steno
Sterile
Sternum
Stigma
Stimulus
Stitch
Stomach
Stool
Strain
Stress
Stridor
Stroke
Stump
Stye
Sudden
Sugar
Sulfate
Surface
Surg
Suture
Swab
Swallow
Sweat
Swell
Symp
Synapse
Syncope
Syndrome
Systole
Tachy
Talc
Tape
Taste
Tear
Temp
Tend
Tendon
Tense
Term
Test
Tetany
Tetanus
Thalamus
Theca
Theory
Thigh
Thorax
Thread
Thrill
Thrive
Thumb
Thymus
Thyroid
Tibia
Tic
Tingle
Tissue
Titer
Toe
Tongue
Tonic
Tonsil
Tooth
Topical
Torso
Touch
Toxic
Toxin
Trace
Trachea
Trait
Trance
Trauma
Treat
Tremor
Trial
Trigger
Triple
Trisomy
Trocar
Trunk
Tube
Tumor
Tussis
Twin
Twitch
Tympany
Type
Ulcer
Ulna
Ultra
Umbilic
Unit
Urea
Ureter
Urethra
Urine
Urtica
Uterus
Uvea
Uvula
Vaccine
Vagina
Vagus
Valve
Vapor
Vascular
Vas
Vastus
Vector
Vein
Velum
Vena
Venom
Ventral
Vermis
Vessel
Vestige
Vial
Villus
Viral
Virulence
Virus
Viscera
Vision
Visual
Vital
Vitamin
Vocal
Voice
Volume
Vomit
Vulva
Waking
Wall
Ward
Wart
Wasting
Water
Weak
Weight
Wheeze
White
Whole
Womb
Worm
Wound
Wrist
X-ray
Yeast
Yellow
Zinc
Zoster
Zygote
ragpA
ybaB
htriB
ciloC
puorC
dlihC
esoD
tcuD
raE
eyE
reveF
ulF
mreG
tuG
traeH
biH
VPH
tnafnI
VI
hctI
tnioJ
eenK
reviL
gnuL
pmuL
ksaM
tsiM
oroM
spmuM
UCIN
esoN
esruN
larO
niaP
lliP
UCIP
oiloP
pmuP
hsaR
VSR
tohS
nikS
topS
pertS
kcuS
puryS
neeT
taorhT
ebuT
tneV
encA
etucA
dionedA
livdA
egA
nimublA
ygrellA
lixomA
aimenA
elknA
atroA
aenpA
yretrA
amhtsA
cipotA
muirtA
msituA
ekawA
llec-B
kcaB
lihposaB
GCB
yllebB
eliB
yspoiB
reddalB
tsalB
deelB
doolB
ydoB
enoB
lewoB
niarB
tsaerB
htaerB
esiurB
nruB
muiclaC
lanaC
recnaC
paC
caidraC
seiraC
tsaC
lleC
tsehC
llihC
ekohC
cinorhC
ailiC
tolC
iccoC
edoC
noloC
amoM
eroC
hguoC
tnuoC
lainarC
maerC
sisirC
gniyrC
FSC
erutluC
tsyC
faeD
htaeD
latneD
simreD
teiD
tsegiD
repaid
hthpiD
esuesiD
AND
rotcoD
ronoD
niarD
pirD
gurD
yrD
lanedouD
frawD
aenpsyD
airusyD
GCE
amezcE
amedE
GEE
woblE
sulobmE
oyrbmE
SME
lemanE
emyznE
nisoE
ttolgipe
xatsipE
iloc-E
maxE
elahxE
ecaF
rotcaF
tniaF
taF
seceF
rumeF
suteF
alubiF
mliF
regniF
knalF
diulF
hsulF
xulF
sucoF
ciloF
dooF
tooF
daehroF
mroF
erutcarF
lagnuF
tiaG
llaG
saG
cirtsaG
ezuaG
eneG
citenG
dnalG
snalG
ssalG
nogaculG
esoculG
nwoG
tfarG
marG
elunarG
pirG
niorG
htworG
muG
riaH
dnaH
daeH
laeH
htlaeH
gniraeH
leeH
tameH
B-peH
ainreH
sepreH
piH
seviH
enomroH
tsoH
dimuH
ordyH
eneigyH
aixopyH
UCI
muelI
enummI
esicnI
rosicnI
trenI
tcefnI
elahnI
yrujnI
rennI
nilusnI
ekatnI
enidoI
sirI
norI
telsI
waJ
munujeJ
tnioJ
raluguJ
yendiK
oliK
baL
citcaL
esotcaL
xnyraL
resaL
daeL
tfeL
geL
sneL
noiseL
lahteL
okueL
leveL
eciL
efiL
tnemagiL
thgiL
bmiL
eniL
dipil
piL
diuqiL
eboL
lacoL
noitoL
rabmuL
hpmyL
enisyL
orcaM
airalaM
elaM
ngilaM
worraM
rettaM
laeM
selsaeM
deM
muideM
sisoieM
ninalel
enarbmM
dneM
latneM
yrucreM
bH-teM
orciM
rutciM
tugdiM
enildiM
kliM
etiM
sisotiM
lartiM
dexiM
edoM
raloM
eloM
htnoM
dooM
noitoM
rotoM
htuol
asocuM
sucuM
elcsuM
tnatuM
nileyM
oyM
liaN
eviN
epaN
siraN
lasaN
aesuaN
lavaN
kceN
eldeeN
evitageN
etanoeN
msalpoeN
evreN
larueN
norueN
thgiN
elppiN
etartiN
edoN
raludoN
esioN
lamroN
hctoN
levoN
DIASN
suelcuN
esruN
ertruN
tuN
tneirtuN
esebO
tluccO
ralucO
rodO
liO
tnemtniO
tesnO
nepO
dioipO
citpO
tibrO
nagrO
ecifirO
sisomsO
elcisso
oetsO
citO
sititO
emoutuO
teltuO
yravO
muvO
negyxO
ecaP
kcaP
daP
etalaP
rollaP
mlaP
yslaP
saercnaP
allipaP
elupaP
ditoraP
hctaP
tnetal
negohP
tneitaP
kaeP
sivleP
sineP
nispeP
citpeP
tnecreP
doireP
TEP
xnyrahP
esahP
lonehP
aibohP
mgehlP
sohP
scisyhP
tnemgiP
noliP
kniP
anniP
gnittiP
ytiP
UKP
obecalP
eugalP
amsalP
teletalP
aruelP
suxelP
gulP
SMP
tekcoP
tnioP
nosioP
yloP
eroP
latroP
tsoP
tnetoP
xoP
eimeerP
xiferP
erusserP
amirP
emirP
orP
eborP
ssecorP
emordorP
tcudorP
espaloP
enorP
nietorP
notorP
aozotorP
lamixorP
sutirurP
oduesP
saosP
hcy sP
sisotP
ytrebuP
cibuP
omluP
esluP
lipuP
eruP
arupruP
suP
surolyP
aixeryP
dauQ
seibaR
suidaR
selaR
egnaR
dipaR
etaR
oitaR
noitcaeR
latceR
mutceR
deR
xelfeR
xulfeR
noigeR
espaleR
laneR
riapeR
eucseR
ediseR
niseR
dnuoseR
tseR
aniteR
weiveR
rotcaR-Rh
muehR
sitinihR
biR
stekciR
ytidigiR
ksiR
tooR
aloesoR
yratoR
dnuoR
etuoR
allebuR
eluR
erutpuR
caS
murcaS
efaS
enilaS
avilaS
nomlaS
elacS
placS
baSc
racS
arelcS
mutorcS
yvrucS
taeS
mubeS
dnoces
ezieS
nemeS
esneS
sispeS
mutpeS
mureS
xeS
tnuhS
cilaiS
tnalibiS
elkciS
ediS
ngiS
suniS
etiS
eziS
peelS
gnilS
llamS
llemS
gnizeenS
paoS
muidoS
tfoS
eloS
diloS
amoS
eroS
dnuoS
msapS
hceepS
mrepS
retcnihpS
enipS
neelS
tnilpS
egnopS
eropS
niarpS
yarpS
mutupS
suomauqS
elbatS
egatS
niatS
hphtS
sisatS
tatS
sutatS
metS
onetS
eliretS
munretS
amgitS
sulumitS
hctitS
hcamotS
looSt
niartS
ssertS
rodirtS
ekortS
pmuSt
eytS
nedduS
raguS
etafluS
ecafruS
gruS
erutuS
bawS
wollawS
taewS
llewS
pmyS
espanyS
epocnyS
emordnyS
elotsyS
yhcaT
claT
epaT
etsaT
raeT
pmeT
dneT
nodneT
esneT
mreT
tseT
ynateT
sunateT
sumalahT
acehT
yroehT
hgihT
xarohT
daerhT
llirhT
evirhT
bmuhT
sumyhT
dioryhT
aibiT
ciT
elgniT
eussiT
retiT
eoT
eugnoT
cinoT
lisnoT
htooT
laciopT
osroT
hcuoT
cixoT
nixoT
ecarT
aehcarT
tiarT
ecnarT
amuarT
taerT
romerT
lairT
reggirT
elpirT
ymosirT
racoT
knurT
ebuT
romuT
sissuT
niwT
hctiwT
ynapmyT
epyT
reclU
anlU
artlU
cilibmU
tinU
aerU
reterU
arhtreU
enirU
acitrU
suretU
aevU
aluvU
eniccaV
anigaV
sugaV
evlaV
ropaV
ralucsaV
saV
sutsaV
rotceV
nieV
muleV
aneV
moneV
lartneV
simreV
lesseV
egitseV
laiV
sulliV
lariV
ecneluriV
suriV
arecsiV
noisiV
lausiv
latiV
nimatiV
lacoV
ecioV
emuloV
timoV
avluV
gnikaW
llaW
draW
traW
gnitsaW
retaW
kaeW
thgieW
ezeehW
etihW
elohW
bmoW
mroW
dnuoW
tsirW
yar-X
tsaeY
wolleY
cniZ
retsoZ
etogyZ
AA
AB
AD
AF
AG
AI
AL
AM
AR
AS
AU
BE
BM
BP
BS
BT
BW
BX
CA
CC
CD
CF
CH
CK
CL
CM
CN
CO
CP
CT
CV
CX
DA
DB
DC
DI
DM
DO
DS
DX
EB
ED
ER
ET
FA
FB
FE
FH
FX
GA
GI
GL
GR
GS
GU
HC
HF
HG
HR
HX
ID
IM
IN
IO
IQ
IT
KG
KO
LA
LB
LD
LG
LL
LP
LV
MD
MG
ML
MM
MS
NG
OD
OR
OS
OT
OU
OZ
PE
PH
PO
PR
PT
RA
RD
RN
RR
RV
RX
SC
TB
UA
Elementos del 1 al 30 (Los más comunes)
H – Hidrógeno / Hydrogen
He – Helio / Helium
Li – Litio / Lithium
Be – Berilio / Beryllium
B – Boro / Boron
C – Carbono / Carbon
N – Nitrógeno / Nitrogen
O – Oxígeno / Oxygen
F – Flúor / Fluorine
Ne – Neón / Neon
Na – Sodio / Sodium
Mg – Magnesio / Magnesium
Al – Aluminio / Aluminum
Si – Silicio / Silicon
P – Fósforo / Phosphorus
S – Azufre / Sulfur
Cl – Cloro / Chlorine
Ar – Argón / Argon
K – Potasio / Potassium
Ca – Calcio / Calcium
Sc – Escandio / Scandium
Ti – Titanio / Titanium
V – Vanadio / Vanadium
Cr – Cromo / Chromium
Mn – Manganeso / Manganese
Fe – Hierro / Iron
Co – Cobalto / Cobalt
Ni – Níquel / Nickel
Cu – Cobre / Copper
Zn – Zinc / Zinc
Elementos del 31 al 60
Ga – Galio / Gallium
Ge – Germanio / Germanium
As – Arsénico / Arsenic
Se – Selenio / Selenium
Br – Bromo / Bromine
Kr – Kriptón / Krypton
Rb – Rubidio / Rubidium
Sr – Estroncio / Strontium
Y – Itrio / Yttrium
Zr – Zirconio / Zirconium
Nb – Niobio / Niobium
Mo – Molibdeno / Molybdenum
Tc – Tecnecio / Technetium
Ru – Rutenio / Ruthenium
Rh – Rodio / Rhodium
Pd – Paladio / Palladium
Ag – Plata / Silver
Cd – Cadmio / Cadmium
In – Indio / Indium
Sn – Estaño / Tin
Sb – Antimonio / Antimony
Te – Telurio / Tellurium
I – Yodo / Iodine
Xe – Xenón / Xenon
Cs – Cesio / Cesium
Ba – Bario / Barium
La – Lantano / Lanthanum
Ce – Cerio / Cerium
Pr – Praseodimio / Praseodymium
Nd – Neodimio / Neodymium
Elementos del 61 al 90
Pm – Prometio / Promethium
Sm – Samario / Samarium
Eu – Europio / Europium
Gd – Gadolinio / Gadolinium
Tb – Terbio / Terbium
Dy – Disprosio / Dysprosium
Ho – Holmio / Holmium
Er – Erbio / Erbium
Tm – Tulio / Thulium
Yb – Iterbio / Ytterbium
Lu – Lutecio / Lutetium
Hf – Hafnio / Hafnium
Ta – Tántalo / Tantalum
W – Wolframio o Tungsteno / Tungsten
Re – Renio / Rhenium
Os – Osmio / Osmium
Ir – Iridio / Iridium
Pt – Platino / Platinum
Au – Oro / Gold
Hg – Mercurio / Mercury
Tl – Talio / Thallium
Pb – Plomo / Lead
Bi – Bismuto / Bismuth
Po – Polonio / Polonium
At – Astato / Astatine
Rn – Radón / Radon
Fr – Francio / Francium
Ra – Radio / Radium
Ac – Actinio / Actinium
Th – Torio / Thorium
Elementos del 91 al 118 (Pesados y sintéticos)
Pa – Protactinio / Protactiniun
U – Uranio / Uranium
Np – Neptunio / Neptunium
Pu – Plutonio / Plutonium
Am – Americio / Americium
Cm – Curio / Curium
Bk – Berkelio / Berkelium
Cf – Californio / Californium
Es – Einstenio / Einsteinium
Fm – Fermio / Fermium
Md – Mendelevio / Mendelevium
No – Nobelio / Nobelium
Lr – Laurencio / Lawrencium
Rf – Rutherfordio / Rutherfordium
Db – Dubnio / Dubnium
Sg – Seaborgio / Seaborgium
Bh – Bohrio / Bohrium
Hs – Hasio / Hassium
Mt – Meitnerio / Meitnerium
Ds – Darmstadtio / Darmstadtium
Rg – Roentgenio / Roentgenium
Cn – Copernicio / Copernium
Nh – Nihonio / Nihonium
Fl – Flerovio / Flerovium
Mc – Moscovio / Moscovium
Lv – Livermorio / Livermorum
Ts – Teneso / Tennessine
Og – Oganesón / Oganesson
`;

/* =========================
   PREPARACIÓN DEL POOL
========================= */
// Palabras-conector (encabezados de sección) que se descartan
const STOP_WORDS = new Set([
  "ELEMENTOS", "DEL", "AL", "LOS", "MAS", "COMUNES",
  "PESADOS", "SINTETICOS", "Y", "LA", "EL", "DE", "EN", "O",
]);

const normalize = (w) =>
  w
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z]/g, "");

const buildPool = (raw) => {
  const set = new Set();
  raw
    .trim()
    .split(/\s+/)
    .forEach((token) => {
      const w = normalize(token);
      if (
        w.length >= 2 &&
        w.length <= Math.max(ROWS, COLS) &&
        !STOP_WORDS.has(w)
      ) {
        set.add(w);
        set.add(w.split("").reverse().join("")); // versión invertida
      }
    });
  return Array.from(set);
};

const WORD_POOL = buildPool(RAW_GLOSSARY);

/* =========================
   GENERADOR DE CRUCIGRAMA
   Optimizado con índice de letras: por cada palabra solo
   se prueban los puntos (r,c) donde EXISTE una letra coincidente.
========================= */
class CrosswordGenerator {
  constructor(words) {
    this.words = words;
  }

  empty() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(""));
  }

  // Devuelve nº de intersecciones si la colocación es válida; -1 si no.
  scorePlacement(g, w, r, c, h) {
    if (h) {
      if (c < 0 || c + w.length > COLS) return -1;
      if (c > 0 && g[r][c - 1] !== "") return -1;
      if (c + w.length < COLS && g[r][c + w.length] !== "") return -1;
    } else {
      if (r < 0 || r + w.length > ROWS) return -1;
      if (r > 0 && g[r - 1][c] !== "") return -1;
      if (r + w.length < ROWS && g[r + w.length][c] !== "") return -1;
    }

    let inters = 0;
    for (let i = 0; i < w.length; i++) {
      const rr = h ? r : r + i;
      const cc = h ? c + i : c;
      const cell = g[rr][cc];
      if (cell === w[i]) {
        inters++;
        continue;
      }
      if (cell !== "") return -1;
      // Sin letras paralelas adyacentes (evita palabras fundidas)
      if (h) {
        if (rr > 0 && g[rr - 1][cc] !== "") return -1;
        if (rr + 1 < ROWS && g[rr + 1][cc] !== "") return -1;
      } else {
        if (cc > 0 && g[rr][cc - 1] !== "") return -1;
        if (cc + 1 < COLS && g[rr][cc + 1] !== "") return -1;
      }
    }
    return inters;
  }

  place(g, w, r, c, h) {
    for (let i = 0; i < w.length; i++) {
      const rr = h ? r : r + i;
      const cc = h ? c + i : c;
      g[rr][cc] = w[i];
    }
  }

  buildLetterIndex(g) {
    const idx = new Map();
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const ch = g[r][c];
        if (ch === "") continue;
        if (!idx.has(ch)) idx.set(ch, []);
        idx.get(ch).push([r, c]);
      }
    }
    return idx;
  }

  tryPlace(g, w, isFirst) {
    if (isFirst) {
      const len = Math.min(w.length, COLS);
      const r = Math.floor(ROWS / 2);
      const c = Math.max(0, Math.floor((COLS - len) / 2));
      this.place(g, w.slice(0, len), r, c, true);
      return true;
    }

    const idx = this.buildLetterIndex(g);
    let best = -1;
    let bestPos = null;

    for (let i = 0; i < w.length; i++) {
      const positions = idx.get(w[i]);
      if (!positions) continue;
      for (const [gr, gc] of positions) {
        // Horizontal: alinear w[i] con (gr,gc)
        let s = this.scorePlacement(g, w, gr, gc - i, true);
        if (s > 0 && (s > best || (s === best && Math.random() < 0.4))) {
          best = s;
          bestPos = { r: gr, c: gc - i, h: true };
        }
        // Vertical
        s = this.scorePlacement(g, w, gr - i, gc, false);
        if (s > 0 && (s > best || (s === best && Math.random() < 0.4))) {
          best = s;
          bestPos = { r: gr - i, c: gc, h: false };
        }
      }
    }

    if (bestPos) {
      this.place(g, w, bestPos.r, bestPos.c, bestPos.h);
      return true;
    }
    return false;
  }

  generate() {
    let bestGrid = this.empty();
    let maxFilled = 0;

    for (let attempt = 0; attempt < 6; attempt++) {
      const grid = this.empty();
      const pool = [...this.words].sort(
        (a, b) => b.length - a.length || Math.random() - 0.5
      );
      const candidates = pool.slice(0, 700);

      let isFirst = true;
      for (let pass = 0; pass < 4; pass++) {
        let placedThisPass = 0;
        for (let i = 0; i < candidates.length; i++) {
          if (this.tryPlace(grid, candidates[i], isFirst)) {
            isFirst = false;
            placedThisPass++;
            candidates.splice(i, 1);
            i--;
          }
        }
        if (placedThisPass === 0) break;
      }

      const filled = grid.flat().filter((c) => c !== "").length;
      if (filled > maxFilled) {
        maxFilled = filled;
        bestGrid = grid.map((r) => [...r]);
      }
    }
    return bestGrid;
  }
}

/* =========================
   NUMERADO Y EXTRACCIÓN DE PISTAS
========================= */
const buildNumberedGrid = (grid) => {
  let num = 1;
  const clues = { across: [], down: [] };

  const numbered = grid.map((row, r) =>
    row.map((char, c) => {
      if (char === "") return { isBlack: true };

      const isStartA =
        (c === 0 || grid[r][c - 1] === "") &&
        c + 1 < COLS &&
        grid[r][c + 1] !== "";
      const isStartD =
        (r === 0 || grid[r - 1][c] === "") &&
        r + 1 < ROWS &&
        grid[r + 1][c] !== "";

      let number = null;
      if (isStartA || isStartD) {
        number = num++;
        if (isStartA) {
          let word = "";
          let cells = [];
          let cc = c;
          while (cc < COLS && grid[r][cc] !== "") {
            word += grid[r][cc];
            cells.push([r, cc]);
            cc++;
          }
          clues.across.push({ num: number, word, cells, r, c });
        }
        if (isStartD) {
          let word = "";
          let cells = [];
          let rr = r;
          while (rr < ROWS && grid[rr][c] !== "") {
            word += grid[rr][c];
            cells.push([rr, c]);
            rr++;
          }
          clues.down.push({ num: number, word, cells, r, c });
        }
      }
      return { char, number, isBlack: false, r, c };
    })
  );

  return { numbered, clues };
};

/* =========================
   HELPERS DE NAVEGACIÓN
========================= */
const findWordCells = (numbered, r, c, dir) => {
  if (!numbered[r] || !numbered[r][c] || numbered[r][c].isBlack) return [];
  const cells = [];
  if (dir === "across") {
    let cc = c;
    while (cc > 0 && !numbered[r][cc - 1].isBlack) cc--;
    while (cc < COLS && !numbered[r][cc].isBlack) {
      cells.push([r, cc]);
      cc++;
    }
  } else {
    let rr = r;
    while (rr > 0 && !numbered[rr - 1][c].isBlack) rr--;
    while (rr < ROWS && !numbered[rr][c].isBlack) {
      cells.push([rr, c]);
      rr++;
    }
  }
  return cells.length > 1 ? cells : [];
};

const cellHasDirection = (numbered, r, c, dir) =>
  findWordCells(numbered, r, c, dir).length > 1;

/* =========================
   COMPONENTE PRINCIPAL
========================= */
export default function App() {
  const [data, setData] = useState(null);
  const [inputs, setInputs] = useState({});
  const [reveal, setReveal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null); // { r, c }
  const [direction, setDirection] = useState("across");
  const [validation, setValidation] = useState(null); // { "r-c": "ok" | "bad" }

  const inputRefs = useRef(new Map());

  /* --- estilos inyectados --- */
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .custom-scrollbar::-webkit-scrollbar { width: 6px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: rgba(241,245,249,0.5); border-radius: 8px; }
      .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 8px; }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      .cell-input:focus { outline: none; }
      @keyframes shimmer {
        0%   { background-position: -400px 0; }
        100% { background-position: 400px 0; }
      }
      .shimmer {
        background: linear-gradient(90deg, #6366f1 0%, #06b6d4 50%, #6366f1 100%);
        background-size: 800px 100%;
        animation: shimmer 2s linear infinite;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      @keyframes pop {
        0% { transform: scale(0.85); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      .pop { animation: pop .25s ease-out; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  /* --- generación --- */
  const generateNewCrossword = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const generator = new CrosswordGenerator(WORD_POOL);
      const rawGrid = generator.generate();
      const puzzleData = buildNumberedGrid(rawGrid);
      setData(puzzleData);
      setInputs({});
      setReveal(false);
      setValidation(null);
      setActive(null);
      setLoading(false);
    }, 350);
  }, []);

  useEffect(() => {
    generateNewCrossword();
  }, [generateNewCrossword]);

  /* --- métricas --- */
  const stats = useMemo(() => {
    if (!data) return { total: 0, filled: 0, density: 0, words: 0, completed: 0 };
    let total = 0;
    let filled = 0;
    data.numbered.forEach((row) =>
      row.forEach((cell) => {
        if (!cell.isBlack) {
          total++;
          if ((inputs[`${cell.r}-${cell.c}`] || "") !== "") filled++;
        }
      })
    );

    const allClues = [...data.clues.across, ...data.clues.down];
    const completedWords = allClues.filter((cl) =>
      cl.cells.every(([r, c]) => (inputs[`${r}-${c}`] || "") === data.numbered[r][c].char)
    ).length;

    return {
      total,
      filled,
      density: total ? Math.round((total / (ROWS * COLS)) * 100) : 0,
      progress: total ? Math.round((filled / total) * 100) : 0,
      words: allClues.length,
      completed: completedWords,
    };
  }, [data, inputs]);

  const isComplete =
    data &&
    stats.completed === stats.words &&
    stats.words > 0 &&
    stats.filled === stats.total;

  /* --- foco / navegación --- */
  const focusCell = (r, c) => {
    const ref = inputRefs.current.get(`${r}-${c}`);
    if (ref) {
      ref.focus();
      ref.select();
    }
  };

  const handleCellClick = (r, c) => {
    if (!data || data.numbered[r][c].isBlack) return;
    // Si ya estaba activa la misma celda, alternar dirección si hay palabra en la otra
    if (active && active.r === r && active.c === c) {
      const other = direction === "across" ? "down" : "across";
      if (cellHasDirection(data.numbered, r, c, other)) setDirection(other);
    } else {
      // Elegir dirección automáticamente si la actual no aplica
      if (!cellHasDirection(data.numbered, r, c, direction)) {
        const other = direction === "across" ? "down" : "across";
        if (cellHasDirection(data.numbered, r, c, other)) setDirection(other);
      }
      setActive({ r, c });
    }
    focusCell(r, c);
  };

  const moveBy = (r, c, dir, delta) => {
    let rr = r;
    let cc = c;
    if (dir === "across") cc += delta;
    else rr += delta;
    if (rr < 0 || rr >= ROWS || cc < 0 || cc >= COLS) return null;
    if (data.numbered[rr][cc].isBlack) return null;
    return [rr, cc];
  };

  const handleChange = (r, c, value) => {
    const v = value.toUpperCase().slice(-1).replace(/[^A-Z]/g, "");
    setInputs((prev) => ({ ...prev, [`${r}-${c}`]: v }));
    setValidation(null);
    if (v) {
      const next = moveBy(r, c, direction, 1);
      if (next) {
        setActive({ r: next[0], c: next[1] });
        focusCell(next[0], next[1]);
      }
    }
  };

  const handleKeyDown = (e, r, c) => {
    const key = e.key;
    if (key === "Backspace") {
      if (!inputs[`${r}-${c}`]) {
        e.preventDefault();
        const prev = moveBy(r, c, direction, -1);
        if (prev) {
          setInputs((p) => ({ ...p, [`${prev[0]}-${prev[1]}`]: "" }));
          setActive({ r: prev[0], c: prev[1] });
          focusCell(prev[0], prev[1]);
        }
      }
      return;
    }
    if (key === " ") {
      e.preventDefault();
      const other = direction === "across" ? "down" : "across";
      if (cellHasDirection(data.numbered, r, c, other)) setDirection(other);
      return;
    }
    let dir = null;
    let delta = 0;
    if (key === "ArrowRight") { dir = "across"; delta = 1; }
    else if (key === "ArrowLeft") { dir = "across"; delta = -1; }
    else if (key === "ArrowDown") { dir = "down"; delta = 1; }
    else if (key === "ArrowUp") { dir = "down"; delta = -1; }
    if (dir !== null) {
      e.preventDefault();
      setDirection(dir);
      const next = moveBy(r, c, dir, delta);
      if (next) {
        setActive({ r: next[0], c: next[1] });
        focusCell(next[0], next[1]);
      }
    }
  };

  const jumpToClue = (clue, dir) => {
    setDirection(dir);
    setActive({ r: clue.r, c: clue.c });
    setTimeout(() => focusCell(clue.r, clue.c), 0);
  };

  const checkAnswers = () => {
    if (!data) return;
    const v = {};
    data.numbered.forEach((row) =>
      row.forEach((cell) => {
        if (cell.isBlack) return;
        const userVal = inputs[`${cell.r}-${cell.c}`] || "";
        if (!userVal) return;
        v[`${cell.r}-${cell.c}`] = userVal === cell.char ? "ok" : "bad";
      })
    );
    setValidation(v);
  };

  /* --- celdas resaltadas --- */
  const activeWordKey = useMemo(() => {
    if (!data || !active) return new Set();
    const cells = findWordCells(data.numbered, active.r, active.c, direction);
    return new Set(cells.map(([r, c]) => `${r}-${c}`));
  }, [data, active, direction]);

  const activeClue = useMemo(() => {
    if (!data || !active) return null;
    const cells = findWordCells(data.numbered, active.r, active.c, direction);
    if (!cells.length) return null;
    const [sr, sc] = cells[0];
    const list = direction === "across" ? data.clues.across : data.clues.down;
    return list.find((cl) => cl.r === sr && cl.c === sc) || null;
  }, [data, active, direction]);

  /* --- pantalla de carga --- */
  if (loading || !data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-indigo-300">
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute w-28 h-28 bg-indigo-500/20 rounded-full animate-ping" />
          <div className="absolute w-20 h-20 bg-cyan-500/30 rounded-full animate-pulse" />
          <Sparkles className="w-12 h-12 text-cyan-300 relative z-10 animate-bounce" />
        </div>
        <h2 className="text-2xl font-black tracking-widest uppercase shimmer">
          Sintetizando Tablero
        </h2>
        <p className="text-slate-400 mt-3 text-sm font-medium">
          Cruzando términos médicos y elementos químicos…
        </p>
      </div>
    );
  }

  /* =========================
     RENDER PRINCIPAL
  ========================= */
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-teal-50 p-4 md:p-8 font-sans text-slate-800">

      {/* ===== HEADER ===== */}
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/60 mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 rounded-xl shadow-lg shadow-indigo-300/40 text-white flex gap-1.5">
              <Stethoscope size={22} />
              <Beaker size={22} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                SciMed{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500">
                  Crossword
                </span>
              </h1>
              <p className="text-sm text-slate-500 font-medium">
                +{WORD_POOL.length} términos médicos y químicos · normales e invertidos
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 w-full md:w-auto">
            <button
              onClick={checkAnswers}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 shadow-sm font-bold rounded-xl transition-all duration-200 active:scale-95"
            >
              <CheckCircle2 size={18} /> Verificar
            </button>
            <button
              onClick={() => setReveal(!reveal)}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm font-bold rounded-xl transition-all duration-200 active:scale-95"
            >
              {reveal ? (
                <>
                  <EyeOff size={18} className="text-indigo-600" /> Ocultar
                </>
              ) : (
                <>
                  <Eye size={18} className="text-slate-500" /> Revelar
                </>
              )}
            </button>
            <button
              onClick={generateNewCrossword}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-md font-bold rounded-xl transition-all duration-200 active:scale-95"
            >
              <RefreshCw size={18} /> Nuevo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard
            icon={<Activity size={18} />}
            label="Densidad"
            value={`${stats.density}%`}
            tone="indigo"
          />
          <StatCard
            icon={<ArrowRight size={18} />}
            label="Pistas"
            value={`${data.clues.across.length}H · ${data.clues.down.length}V`}
            tone="teal"
          />
          <StatCard
            icon={<Trophy size={18} />}
            label="Completas"
            value={`${stats.completed} / ${stats.words}`}
            tone="amber"
          />
          <StatCard
            icon={<Sparkles size={18} />}
            label="Progreso"
            value={`${stats.progress}%`}
            tone="violet"
          />
        </div>

        {/* Barra de progreso */}
        <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 transition-all duration-500 rounded-full"
            style={{ width: `${stats.progress}%` }}
          />
        </div>

        {isComplete && (
          <div className="mt-4 pop flex items-center justify-center gap-3 p-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-lg">
            <Trophy size={20} /> ¡Crucigrama completo! Increíble trabajo.
          </div>
        )}
      </div>

      {/* ===== Pista activa (sticky) ===== */}
      {activeClue && !reveal && (
        <div className="max-w-7xl mx-auto mb-4 bg-white/90 backdrop-blur-md border-l-4 border-indigo-500 shadow-md rounded-xl px-4 py-3 flex items-center gap-3 text-sm">
          <span
            className={`w-7 h-7 rounded-md flex items-center justify-center text-white font-black ${
              direction === "across" ? "bg-indigo-500" : "bg-teal-500"
            }`}
          >
            {direction === "across" ? <ArrowRight size={14} /> : <ArrowDown size={14} />}
          </span>
          <span className="font-black text-slate-800">{activeClue.num}.</span>
          <span className="text-slate-600 font-semibold tracking-wider">
            {"?".repeat(activeClue.word.length)}
          </span>
          <span className="ml-auto text-slate-400 font-medium text-xs">
            {activeClue.word.length} letras
          </span>
        </div>
      )}

      {/* ===== LAYOUT JUEGO ===== */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* TABLERO */}
        <div className="flex-none bg-white p-3 md:p-5 rounded-2xl shadow-xl border border-slate-200/60 overflow-auto flex justify-center items-start">
          <div
            className="grid gap-[1px] bg-slate-300 p-[1px] rounded-lg shadow-inner select-none overflow-hidden"
            style={{ gridTemplateColumns: `repeat(${COLS}, minmax(30px, 40px))` }}
          >
            {data.numbered.map((row, r) =>
              row.map((cell, c) => {
                const key = `${r}-${c}`;
                if (cell.isBlack) {
                  return (
                    <div
                      key={key}
                      className="w-full aspect-square bg-slate-900 rounded-[2px]"
                    />
                  );
                }
                const isActive = active && active.r === r && active.c === c;
                const inWord = activeWordKey.has(key);
                const v = validation && validation[key];

                let bg = "bg-white";
                if (reveal) bg = "bg-indigo-50";
                else if (isActive) bg = "bg-amber-200";
                else if (inWord) bg = "bg-indigo-100";
                if (v === "ok") bg = "bg-emerald-100";
                else if (v === "bad") bg = "bg-rose-100";

                let textCls = "text-slate-800";
                if (reveal) textCls = "text-indigo-700";
                if (v === "ok") textCls = "text-emerald-700";
                if (v === "bad") textCls = "text-rose-700";

                return (
                  <div
                    key={key}
                    className={`relative w-full aspect-square flex items-center justify-center rounded-[2px] transition-colors duration-150 ${bg} ${
                      isActive ? "ring-2 ring-amber-500 z-10" : ""
                    }`}
                  >
                    {cell.number && (
                      <span className="absolute text-[10px] top-[2px] left-[3px] font-bold text-slate-700 pointer-events-none z-10 leading-none">
                        {cell.number}
                      </span>
                    )}
                    <input
                      ref={(el) => {
                        if (el) inputRefs.current.set(key, el);
                        else inputRefs.current.delete(key);
                      }}
                      maxLength={1}
                      value={reveal ? cell.char : inputs[key] || ""}
                      onChange={(e) => handleChange(r, c, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, r, c)}
                      onClick={() => handleCellClick(r, c)}
                      onFocus={() => {
                        if (!active || active.r !== r || active.c !== c) {
                          setActive({ r, c });
                        }
                      }}
                      readOnly={reveal}
                      className={`cell-input w-full h-full text-center font-extrabold text-lg md:text-xl bg-transparent caret-indigo-500 ${textCls}`}
                      aria-label={`Celda fila ${r + 1} columna ${c + 1}`}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* PISTAS */}
        <div className="flex-1 bg-white/85 backdrop-blur-md p-5 md:p-6 rounded-2xl shadow-xl border border-slate-200/60 flex flex-col md:flex-row gap-6 max-h-[750px]">
          <CluesColumn
            label="Horizontales"
            badge="H"
            icon={<ArrowRight size={14} />}
            color="indigo"
            clues={data.clues.across}
            reveal={reveal}
            onSelect={(cl) => jumpToClue(cl, "across")}
            activeClue={direction === "across" ? activeClue : null}
            inputs={inputs}
            numbered={data.numbered}
          />
          <CluesColumn
            label="Verticales"
            badge="V"
            icon={<ArrowDown size={14} />}
            color="teal"
            clues={data.clues.down}
            reveal={reveal}
            onSelect={(cl) => jumpToClue(cl, "down")}
            activeClue={direction === "down" ? activeClue : null}
            inputs={inputs}
            numbered={data.numbered}
          />
        </div>

      </div>

      <p className="max-w-7xl mx-auto mt-6 text-center text-xs text-slate-400 font-medium">
        Tip: usa flechas para moverte, Espacio para alternar dirección, click en una pista para saltar.
      </p>
    </div>
  );
}

/* =========================
   SUBCOMPONENTES
========================= */
function StatCard({ icon, label, value, tone }) {
  const tones = {
    indigo: "from-indigo-500/10 to-indigo-500/5 text-indigo-700 border-indigo-100",
    teal:   "from-teal-500/10 to-teal-500/5 text-teal-700 border-teal-100",
    amber:  "from-amber-500/10 to-amber-500/5 text-amber-700 border-amber-100",
    violet: "from-violet-500/10 to-violet-500/5 text-violet-700 border-violet-100",
  };
  return (
    <div className={`flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gradient-to-br ${tones[tone]} border`}>
      <div className="opacity-70">{icon}</div>
      <div className="flex flex-col leading-tight">
        <span className="text-[11px] uppercase tracking-wider font-bold opacity-70">{label}</span>
        <span className="text-sm font-black">{value}</span>
      </div>
    </div>
  );
}

function CluesColumn({ label, badge, icon, color, clues, reveal, onSelect, activeClue, inputs, numbered }) {
  const colors = {
    indigo: {
      headerBorder: "border-indigo-100",
      badgeBg: "bg-indigo-100 text-indigo-700",
      hover: "hover:bg-indigo-50",
      number: "text-indigo-400 group-hover:text-indigo-600",
      activeBg: "bg-indigo-100 ring-1 ring-indigo-300",
      done: "text-indigo-300 line-through",
    },
    teal: {
      headerBorder: "border-teal-100",
      badgeBg: "bg-teal-100 text-teal-700",
      hover: "hover:bg-teal-50",
      number: "text-teal-400 group-hover:text-teal-600",
      activeBg: "bg-teal-100 ring-1 ring-teal-300",
      done: "text-teal-300 line-through",
    },
  };
  const cs = colors[color];

  return (
    <div className="flex-1 flex flex-col overflow-hidden min-w-0">
      <div className={`pb-3 border-b-2 ${cs.headerBorder} mb-3 flex items-center gap-2`}>
        <span className={`w-8 h-8 rounded-lg ${cs.badgeBg} flex items-center justify-center font-black gap-1`}>
          {icon}
          <span className="text-[11px]">{badge}</span>
        </span>
        <h2 className="text-lg font-black text-slate-800 uppercase tracking-wider">
          {label}
        </h2>
        <span className="ml-auto text-xs font-bold text-slate-400">{clues.length}</span>
      </div>
      <ul className="space-y-1 overflow-y-auto custom-scrollbar pr-2 pb-2">
        {clues.map((c) => {
          const isDone = c.cells.every(
            ([r, cc]) => (inputs[`${r}-${cc}`] || "") === numbered[r][cc].char
          );
          const isActive = activeClue && activeClue.num === c.num;
          return (
            <li
              key={`${color}${c.num}`}
              onClick={() => onSelect(c)}
              className={`text-sm flex gap-2.5 group p-2 rounded-lg cursor-pointer transition-colors ${
                isActive ? cs.activeBg : cs.hover
              }`}
            >
              <span
                className={`font-black min-w-[1.5rem] text-right mt-0.5 ${
                  isActive ? "text-slate-800" : cs.number
                }`}
              >
                {c.num}.
              </span>
              <span
                className={`font-semibold tracking-wide break-all ${
                  isDone ? cs.done : "text-slate-700 group-hover:text-slate-900"
                }`}
              >
                {reveal ? c.word : "?".repeat(c.word.length)}
                <span className="text-slate-400 font-normal text-xs ml-1.5">
                  ({c.word.length})
                </span>
              </span>
            </li>
          );
        })}
        {clues.length === 0 && (
          <li className="text-slate-400 text-sm italic">Sin pistas.</li>
        )}
      </ul>
    </div>
  );
}
