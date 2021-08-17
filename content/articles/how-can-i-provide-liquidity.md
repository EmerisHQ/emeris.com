---
index: 8
title: How can I provide liquidity?
tags: 
  - emeris-main
---

*In order to provide liquidity, you will need to have both sides of the pair.*
*If you want to provide liquidity in the [ATOM:OSMO] pool you will need to have some $ATOM and some $OSMO, to provide liquidity in the [ATOM:IRIS] pool you will need both $ATOM and $IRIS, and so on.*
Remember that when we talk about percentage we are referring to the value (i.e. $10 each) and not the number of the tokens.

1. Go to the [**Pools**] section

2. Click on the pool you wish to add tokens to

3. Select [**Add Liquidity**] on the right (Equity section)

4. Indicate the desired amount of tokens. 
  Once the amount of one of the two tokens is indicated, the other will automatically be filled by the system.

5. Select [**Continue**]
  *If the tokens are not in the Cosmos Hub, Emeris will first perform an interchain transaction to bring the tokens into the hub and then add the tokens to the pool. You will need to [Confirm and continue] on Emeris first and then on Keplr to complete the transfer.*

6. A pop-up of Keplr extension will appear asking you to approve the operation by selecting [**Approve**].

Once the procedure has been successfully completed, it will be possible to visualize the summary of the operation.
Providing liquidity to the pool, you have obtained **LP Tokens** called [**Gravity X**](the number varies as it is associated with a specific pool).

Note:

* **If you want to remove the liquidity you have placed in the pool**, go to [pools] page, select the pool you want to remove the liquidity from, click on [Withdraw].
Now you can choose how much to withdraw (whether all or part of it) from the pool by using the LP tokens in your possession. For simplicity, at the bottom, you will find how much percentage of the pool corresponds to the tokens you want to withdraw.

* **If you want to create a pool**, go to the [Pools] page, select on the side [+ add liquidity] and select the two tokens you want as pairs. A message will be displayed [You are the first liquidity provider. As the first liquidity provider to the AKT / XPRT pool, you will be creating the pool and setting the price. Proceed with caution].
  Click on [Confirm] >[I understand] > [continue] and [proceed and continue].

* **Liquidity provision is not without costs.**
  LPs take on a risk known as impermanent loss. You can read more on [Emeris FAQ].

* **The Cosmos Hub does not currently support farming incentives.** 
  However, a Cosmos SDK module is currently being developed for this purpose. The Hub community may submit a proposal to upgrade to the farming module and enable farming incentives for the Gravity DEX. We will report on the readiness of the farming module and the proposal as we get further information.

![How can I provide liquidity](/step-by-step/pool-01.png)

![How can I provide liquidity](/step-by-step/pool-02.png)

![How can I provide liquidity](/step-by-step/pool-03.png)

![How can I provide liquidity](/step-by-step/pool-04.png)
