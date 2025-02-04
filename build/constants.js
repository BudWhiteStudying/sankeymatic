// constants.js: Reference file with several values used in sankeymatic.js
/* eslint-disable no-unused-vars */

// fontMetrics = measurements relating to labels & their highlights
//   Structure:
//     browserKey ('firefox' or '*')
//       -> font-face or '*'
//         -> values
//   Value list:
//     - dy: what fraction of the BoundingBox to lower labels to make them
//       vertically-centered relative to their Node
//     - top, bot: how many x-heights to pad above/below the BoundingBox
//     - inner: how many em-widths to pad between the label and the
//       highlight's edge (could be on the left or right)
//     - outer: how many em-widths to pad at the end furthest from the Node
//     - marginRight: what multiple of 'inner' to move labels to the right
//     - marginAdjLeft: offset to add to marginRight when moving labels
//       to left
const fontMetrics
  = {
    firefox: {
      'sans-serif': {
        dy: 0.35, top: 0.55, bot: 0.25, inner: 0.35, outer: 0.35,
        marginRight: 1.4, marginAdjLeft: 0,
        },
      monospace: {
        dy: 0.31, top: 0.3, bot: 0.25, inner: 0.35, outer: 0.35,
        marginRight: 1.48, marginAdjLeft: -0.08,
        },
      '*': {
        dy: 0.31, top: 0.3, bot: 0.25, inner: 0.35, outer: 0.35,
        marginRight: 1.35, marginAdjLeft: -0.05,
        },
    },
    '*': {
      monospace: {
        dy: 0.28, top: 0.3, bot: 0.3, inner: 0.35, outer: 0.38,
        marginRight: 1.45, marginAdjLeft: 0,
        },
      '*': {
        dy: 0.29, top: 0.3, bot: 0.3, inner: 0.35, outer: 0.38,
        marginRight: 1.35, marginAdjLeft: 0,
        },
    },
  },

  // highlightStyles = settings relating to label highlight appearance
  //   Structure:
  //     mode ('dark' or 'light')
  //       -> state ('orig' or 'hover')
  //         -> values (directly applied as SVG attributes)
  highlightStyles
  = {
    // When text is dark-on-light:
    dark: {
      orig: { fill: '#fff', stroke: 'none', stroke_width: 0, stroke_opacity: 0 },
      hover: { fill: '#ffb', stroke: '#440', stroke_width: 1, stroke_opacity: 0.7 },
    },
    // When text is light-on-dark:
    light: {
      orig: { fill: '#000', stroke: 'none', stroke_width: 0, stroke_opacity: 0 },
      hover: { fill: '#603', stroke: '#fff', stroke_width: 1.7, stroke_opacity: 0.9 },
    },
  },

  // sampleDiagramRecipes = preset diagrams of various types.
  //
  // Planning to make these more elaborate / sophisticated as the tool's
  // capabilities improve...
  //
  // These contain some super-long string literals; I preferred that to
  // making this a very /tall/ file with a difficult-to-follow structure.
  sampleDiagramRecipes
    = new Map([
    // The initial diagram loaded on the page:
    ['default_budget', {
      name: 'Basic Budget',
      flows: "// Enter Flows between Nodes, like this:\n//         Source [AMOUNT] Target\n\nWages [1500] Budget\nOther [250] Budget\n\nBudget [450] Taxes\nBudget [420] Housing\nBudget [400] Food\nBudget [295] Transportation\nBudget [25] Savings\n\n// You can set a Node's color, like this:\n:Budget #708090\n//            ...or a color for a single Flow:\nBudget [160] Other Necessities #0F0\n\n// Use the controls below to customize\n// your diagram's appearance...",
      settings: {
        canvas_width: 600,
        node_height: 50,
        node_spacing: 85,
        node_width: 9,
        font_size: 16,
        unit_prefix: '',
        layout_style_auto: true,
        flow_outside_in: true,
        theme_a_radio: true,
        justify_ends: false,
        },
    }],

    // Ranked-choice election:
    ['election', {
      name: 'Ranked Election',
      flows: '// Sample Ranked Election diagram\n\nGH - Round 1 [300000] GH - Round 2\nEF - Round 1 [220000] EF - Round 2\nCD - Round 1 [200000] CD - Round 2\nAB - Round 1 [10000] GH - Round 2\nAB - Round 1 [25000] EF - Round 2\nAB - Round 1 [20000] CD - Round 2\n\nGH - Round 2 [310000] GH - Round 3\nEF - Round 2 [245000] EF - Round 3\nCD - Round 2 [50000] GH - Round 3\nCD - Round 2 [95000] EF - Round 3\n\n// This line sets a custom gray color:\n:No further votes #555 <<\nAB - Round 1 [20000] No further votes\nCD - Round 2 [75000] No further votes',
      settings: {
        canvas_width: 700,
        node_height: 76,
        node_spacing: 85,
        node_width: 9,
        font_size: 14,
        unit_prefix: '',
        layout_style_exact: true,
        flow_inherit_from_source: true,
        theme_a_radio: true,
        justify_ends: false,
        },
    }],

    // Sample job-hunt flow:
    ['job_search', {
      name: 'Job Search',
      flows: '// Sample Job Search diagram:\n\nApplications [4] Interview\nApplications [9] Rejected\nApplications [4] No Answer\n\nInterview [2] 2nd Interview\nInterview [2] No Offer\n\n2nd Interview [2] Offer\n\nOffer [1] Accepted\nOffer [1] Declined',
      settings: {
        canvas_width: 700,
        node_height: 50,
        node_spacing: 50,
        node_width: 5,
        font_size: 14,
        unit_prefix: '',
        layout_style_auto: true,
        flow_inherit_from_target: true,
        theme_a_radio: true,
        justify_ends: false,
        },
    }],

    // Sample quarterly financial results:
    ['financial_results', {
      name: 'Financial Results',
      flows: 'Division A [900] Revenue\nDivision B [750] Revenue\nDivision C [150] Revenue\n\nRevenue [1000] Gross Profit\n\nGross Profit [350] Operating Profit\nGross Profit [650] Operating Expenses\n\nOperating Profit [260] Net Profit\nOperating Profit [90] Tax\n\nOperating Expenses [640] S G & Admin\nOperating Expenses [10] Amortization\n\nRevenue [800] Cost of Sales\n\n// Profit - blue\n:Gross Profit #48e <<\n:Operating Profit #48e <<\n:Net Profit #48e <<\n\n// Expenses - rust\n:Operating Expenses #d74 <<\n:Tax #d74 <<\n:S G & Admin #d74 <<\n:Amortization #d74 <<\n\n// Cost - grayish-gold\n:Cost of Sales #e6cc91 <<\n\n// main Revenue node: dark grey\n:Revenue #444',
      settings: {
        canvas_width: 1000,
        node_height: 70,
        node_spacing: 70,
        node_width: 5,
        font_size: 13,
        unit_prefix: '$',
        layout_style_auto: true,
        node_use_color: true,
        flow_use_color: true,
        justify_ends: true,
        },
    }],

    // The most basic diagram:
    ['simple_start', {
      name: 'Start Simple',
      flows: 'a [1] b\na [1] c',
      settings: {
        canvas_width: 600,
        node_height: 50,
        node_spacing: 80,
        node_width: 12,
        font_size: 15,
        unit_prefix: '',
        layout_style_auto: true,
        node_use_color: true,
        flow_use_color: true,
        justify_ends: false,
        },
    }],

    // A variation of the inputs for the original d3 energy diagram, now found
    // at https://observablehq.com/@d3/sankey:
    // (This will become another button at some point.)
    // ['energy_flows_all', {
    //   name: 'Energy Flows',
    // eslint-disable-next-line max-len
    //   flows: ":Losses #900 <<\n:Coal #444 <<\nAgricultural 'waste' [124.729] Bio-conversion\nBio-conversion [0.597] Liquid\nBio-conversion [26.862] Losses\nBio-conversion [280.322] Solid\nBio-conversion [81.144] Gas\nBiofuel imports [35] Liquid\nBiomass imports [35] Solid\nCoal imports [11.606] Coal\nCoal reserves [63.965] Coal\nCoal [75.571] Solid\nDistrict heating [10.639] Industry\nDistrict heating [22.505] Heating and cooling - commercial\nDistrict heating [46.184] Heating and cooling - homes\nElectricity grid [104.453] Over generation / exports\nElectricity grid [113.726] Heating and cooling - homes\nElectricity grid [27.14] H2 conversion\nElectricity grid [342.165] Industry\nElectricity grid [37.797] Road transport\nElectricity grid [4.412] Agriculture\nElectricity grid [40.858] Heating and cooling - commercial\nElectricity grid [56.691] Losses\nElectricity grid [7.863] Rail transport\nElectricity grid [90.008] Lighting & appliances - commercial\nElectricity grid [93.494] Lighting & appliances - homes\nGas imports [40.719] Ngas\nGas reserves [82.233] Ngas\nGas [0.129] Heating and cooling - commercial\nGas [1.401] Losses\nGas [151.891] Thermal generation\nGas [2.096] Agriculture\nGas [48.58] Industry\nGeothermal [7.013] Electricity grid\nH2 conversion [20.897] H2\nH2 conversion [6.242] Losses\nH2 [20.897] Road transport\nHydro [6.995] Electricity grid\nLiquid [121.066] Industry\nLiquid [128.69] International shipping\nLiquid [135.835] Road transport\nLiquid [14.458] Domestic aviation\nLiquid [206.267] International aviation\nLiquid [3.64] Agriculture\nLiquid [33.218] National navigation\nLiquid [4.413] Rail transport\nMarine algae [4.375] Bio-conversion\nNgas [122.952] Gas\nNuclear [839.978] Thermal generation\nOil imports [504.287] Oil\nOil reserves [107.703] Oil\nOil [611.99] Liquid\nOther waste [56.587] Solid\nOther waste [77.81] Bio-conversion\nPumped heat [193.026] Heating and cooling - homes\nPumped heat [70.672] Heating and cooling - commercial\nSolar PV [59.901] Electricity grid\nSolar Thermal [19.263] Heating and cooling - homes\nSolar [19.263] Solar Thermal\nSolar [59.901] Solar PV\nSolid [0.882] Agriculture\nSolid [400.12] Thermal generation\nSolid [46.477] Industry\nThermal generation [525.531] Electricity grid\nThermal generation [787.129] Losses\nThermal generation [79.329] District heating\nTidal [9.452] Electricity grid\nUK land based bioenergy [182.01] Bio-conversion\nWave [19.013] Electricity grid\nWind [289.366] Electricity grid",
    //   settings: {},
    // }],
  ]),
  // Some prime constants for enum values:
  [IN, OUT, BEFORE, AFTER] = [11, 13, 17, 19];
