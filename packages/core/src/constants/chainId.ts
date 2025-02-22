// organize imports in alphabet order to sparse the conflict when adding a new chain
import {
  Localhost,
  Hardhat,
  Arbitrum,
  ArbitrumRinkeby,
  ArbitrumGoerli,
  ArbitrumNova,
  Avalanche,
  AvalancheTestnet,
  Aurora,
  AuroraTestnet,
  BlastSepoliaTestnet,
  BSC,
  BSCTestnet,
  Canto,
  CantoTestnet,
  Celo,
  CeloAlfajores,
  Cronos,
  CronosTestnet,
  Fantom,
  FantomTestnet,
  Harmony,
  Mainnet,
  Ropsten,
  Rinkeby,
  Gnosis,
  Goerli,
  Kovan,
  Andromeda,
  Stardust,
  Moonriver,
  MoonbaseAlpha,
  Moonbeam,
  Palm,
  PalmTestnet,
  Polygon,
  Mumbai,
  OasisEmerald,
  OasisEmeraldTestnet,
  Songbird,
  Flare,
  FlareCostonTestnet,
  FlareCoston2Testnet,
  Theta,
  ThetaTestnet,
  ThunderCore,
  ThunderCoreTestnet,
  OptimismGoerli,
  OptimismKovan,
  Optimism,
  Velas,
  VelasTestnet,
  BaseGoerli,
  Base,
  ZkSync,
  ZkSyncTestnet,
  ArbitrumRedditTestnet,
  Sepolia,
  RootstockMainnet,
  RootstockTestnet,
  KlaytnTestnet,
  Klaytn,
  ScrollAlphaTestnet,
  ScrollSepoliaTestnet,
  Linea,
  LineaTestnet,
  MantleTestnet,
  KromaSepoliaTestnet,
  KromaMainnet,
} from '../model'

// rough alphabet order (put network from the same chain together)
export const DEFAULT_SUPPORTED_CHAINS = [
  Localhost,
  Hardhat,
  Avalanche,
  AvalancheTestnet,
  Arbitrum,
  ArbitrumRinkeby,
  ArbitrumGoerli,
  ArbitrumNova,
  Aurora,
  AuroraTestnet,
  Mainnet,
  Ropsten,
  Rinkeby,
  Goerli,
  Kovan,
  BSC,
  BSCTestnet,
  Canto,
  CantoTestnet,
  Celo,
  CeloAlfajores,
  Cronos,
  CronosTestnet,
  Fantom,
  FantomTestnet,
  Gnosis,
  Harmony,
  Andromeda,
  Stardust,
  Moonriver,
  MoonbaseAlpha,
  Moonbeam,
  Palm,
  PalmTestnet,
  Polygon,
  Mumbai,
  OasisEmerald,
  OasisEmeraldTestnet,
  Sepolia,
  Songbird,
  Flare,
  FlareCostonTestnet,
  FlareCoston2Testnet,
  Theta,
  ThetaTestnet,
  ThunderCore,
  ThunderCoreTestnet,
  OptimismGoerli,
  OptimismKovan,
  Optimism,
  Velas,
  VelasTestnet,
  ZkSync,
  ZkSyncTestnet,
  ArbitrumRedditTestnet,
  RootstockMainnet,
  RootstockTestnet,
  KlaytnTestnet,
  Klaytn,
  BaseGoerli,
  Base,
  ScrollAlphaTestnet,
  ScrollSepoliaTestnet,
  Linea,
  LineaTestnet,
  MantleTestnet,
  KromaSepoliaTestnet,
  KromaMainnet,
  BlastSepoliaTestnet,
]

export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Sepolia = 11155111,
  ThunderCoreTestnet = 18,
  Canto = 7700,
  CantoTestnet = 740,
  Cronos = 25,
  CronosTestnet = 338,
  Kovan = 42,
  BSC = 56,
  BSCTestnet = 97,
  xDai = 100,
  Gnosis = 100,
  ThunderCore = 108,
  Polygon = 137,
  Theta = 361,
  ThetaTestnet = 365,
  Moonriver = 1285,
  Moonbeam = 1284,
  Mumbai = 80001,
  Harmony = 1666600000,
  Palm = 11297108109,
  PalmTestnet = 11297108099,
  Localhost = 1337,
  Hardhat = 31337,
  Fantom = 250,
  FantomTestnet = 4002,
  Avalanche = 43114,
  AvalancheTestnet = 43113,
  Celo = 42220,
  CeloAlfajores = 44787,
  Songbird = 19,
  Flare = 14,
  FlareCostonTestnet = 16,
  FlareCoston2Testnet = 114,
  MoonbaseAlpha = 1287,
  OasisEmerald = 42262,
  OasisEmeraldTestnet = 42261,
  Stardust = 588,
  Andromeda = 1088,
  OptimismGoerli = 420,
  OptimismKovan = 69,
  Optimism = 10,
  Arbitrum = 42161,
  ArbitrumRinkeby = 421611,
  ArbitrumGoerli = 421613,
  Aurora = 1313161554,
  AuroraTestnet = 1313161555,
  Velas = 106,
  VelasTestnet = 111,
  ZkSync = 324,
  ZkSyncTestnet = 280,
  ArbitrumRedditTestnet = 5391184,
  RootstockMainnet = 30,
  RootstockTestnet = 31,
  KlaytnTestnet = 1001,
  Klaytn = 8217,
  BaseGoerli = 84531,
  Base = 8453,
  ScrollAlpha = 534353,
  ScrollSepolia = 534351,
  Linea = 59144,
  LineaTestnet = 59140,
  ArbitrumNova = 42170,
  MantleTestnet = 5001,
  Kroma = 255,
  KromaSepolia = 2358,
  BlastSepolia = 168587773,
}
