---
index: 10
title: How should ATOM holders select validators? 
description: Before you delegate, learn more about the validator's operation, history, and security practices.
alt: Article 10
author: 
  name: SAMUEL L. IPSUM
  bio: Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.
  img: https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=60
tags: 
  - blockchain
  - atom
---

To select validators, ATOM holders have access to a range of information available in a [Keplr interchain wallet](https://wallet.keplr.app) or other Cosmos block explorers like [Mintscan](https://www.mintscan.io/cosmos/validators). Review the following information before you make a decision:

- **Validator name** (also known as the moniker): Name of the validator candidate.
- **Validator description**: Description provided by the validator operator.
- **Validator website**: The validator's website.
- **Initial commission rate**: The [commission](/learn/faq/what-is-a-validators-commission) rate on rewards to a delegator. 
- **Commission max change rate:** The maximum daily increase of the validator's commission. This parameter cannot be changed by the validator operator. 
- **Maximum commission:** The maximum commission rate this validator candidate can charge. This parameter cannot be changed by the validator operator. 
- **Minimum self-bond amount**: Minimum amount of ATOM the validator candidate must have bonded at all times. If the validator's self-bonded stake falls below this limit, their entire staking pool (all its delegators) unbonds. This parameter exists as a safeguard for delegators. When a validator misbehaves, part of their total stake gets slashed. This stake includes the validator's self-delegated stake and their delegators' stake. The minimum self-bond amount ensures that a validator with a high amount of self-delegated ATOM has more skin-in-the-game than a validator with a low amount. The minimum self-bond amount parameter guarantees to delegators that a validator will never fall below a certain amount of self-bonded stake. This parameter can be increased only by the validator operator. 

Beyond these on-chain information resources, we encourage delegators to learn more about the validator's operation, history, and security practices. 
