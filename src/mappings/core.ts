import { ADDRESS_ZERO, BIG_DECIMAL_ZERO, MASTER_CHEF_ADDRESS, MINIMUM_USD_THRESHOLD_NEW_PAIRS, WHITELIST } from 'const'
import { BigInt, BigDecimal, store, Address } from '@graphprotocol/graph-ts'
//import { Burn, Mint, Pair, Swap, Token, Transaction } from '../../generated/schema'
import {
    Burn as BurnEvent,
    Mint as MintEvent,
    AthleteXPair as PairContract,
    Swap as SwapEvent,
    Sync as SyncEvent,
    Transfer as TransferEvent,
  } from '../../generated/templates/AthleteXPair/AthleteXPair'

export function handleTransfer(event: TransferEvent): void {}

export function handleSync(event: SyncEvent): void {}

export function handleMint(event: MintEvent): void {}

export function handleBurn(event: BurnEvent): void {}

export function handleSwap(event: SwapEvent): void {}