# Gilded Rose

Practice tech test complete in JavaScript and tested in Jasmine. A stripped down version of the Gilded Rose challenge. Completed in just over a day.

## Brief
*"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

* “Conjured” items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."*

## User Stories
```
As a a Guilded Rose team member,
So that we know when we have to sell an item by,
I want a day-counter that counts down how long we have left to sell it

As a Guilded Rose team member,
So that we know the current quality of an item,
I want items to have quality counter that decreases by one every day

As a Guilded Rose team member,
So that I know when I've really got to shift an item,
I want item quality to decrease by two every day when the sell-by date is past

As a Guilded Rose team member,
So that our system reflects reality,
I never want an item quality to be negative

As a Guilded Rose team member,
To prevent ludicrous over-valuing,
I want the quality of an item never to be more than 50

As a Guilded Rose team member,
To represent special qualities of legendary items,
I don't want their quality or sell-by date to ever decrease

As a Guilded Rose team member,
So that I can see how some products appreciate in quality with time,
I want "Aged Brie" to increase in quality by day.

As a Guilded Rose team member,
To represent extremely time-limited items,
I want backstage passes to rapidly increase in quality as the sell-by date approaches

As a Guilded Rose team member,
To represent extremely time-limited items,
I want backstage passes' quality to decrease to 0 after the sell-by date

As a Guilded Rose team member,
To represent the precariousness of conjured items,
I want conjured items' quality to degrade twice as quickly as other items
```
