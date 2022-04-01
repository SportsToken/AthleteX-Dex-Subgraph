// import { BigInt, BigDecimal, store, Address } from '@graphprotocol/graph-ts'
import { Burn, Mint, Pair, Swap, Token, Transaction } from '../../generated/schema'
import { BigDecimal, BigInt, ethereum } from '@graphprotocol/graph-ts'
import { FACTORY_ADDRESS, ONE_BI, ZERO_BD, ZERO_BI } from './utils/constants'

import {
    Burn as BurnEvent,
    Mint as MintEvent,
    Swap as SwapEvent,
  } from '../../generated/schema'

  import { 
    AthleteXPair as PairContract,
    Sync as SyncEvent,
    Transfer as TransferEvent, 
  } from '../../generated/templates/AthleteXPair/AthleteXPair'


export function handleTransfer(event: TransferEvent): void {}

export function handleSync(event: SyncEvent): void {}

export function handleMint(event: MintEvent): void {}

export function handleBurn(event: BurnEvent): void {}

export function handleSwap(event: SwapEvent): void {}