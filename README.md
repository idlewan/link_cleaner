# Link Cleaner
Browser extension to clean URLs that are about to be visited:
- removes utm_* parameters
- on item pages of aliexpress and amazon, removes tracking parameters
- skip redirect pages of facebook, steam and reddit (directly go to the url
being redirected to, and never hit their outgoing redirect tracking)

You can now visit and bookmark clean links instead of the long,
tracking-enabled ones!

# Examples:
- utm_* removal:  
    http://meyerweb.com/eric/thoughts/2017/03/07/welcome-to-the-grid/?utm_source=frontendfocus&utm_medium=email  
  is changed to:  
    http://meyerweb.com/eric/thoughts/2017/03/07/welcome-to-the-grid/
- amazon item url:  
    https://www.amazon.com/AmazonBasics-Type-C-USB-Male-Cable/dp/B01GGKYQ02/ref=sr_1_1?s=amazonbasics&srs=10112675011&ie=UTF8&qid=1489067885&sr=8-1&keywords=usb-c  
  is changed to:  
    https://www.amazon.com/AmazonBasics-Type-C-USB-Male-Cable/dp/B01GGKYQ02/
- facebook redirect:  
    https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.fsf.org%2Fcampaigns%2F&h=ATP1kf98S0FxqErjoW8VmdSllIp4veuH2_m1jl69sEEeLzUXbkNXrVnzRMp65r5vf21LJGTgJwR2b66m97zYJoXx951n-pr4ruS1osMvT2c9ITsplpPU37RlSqJsSgba&s=1  
  is changed to  
    https://www.fsf.org/campaigns/
- reddit redirect:  
    https://out.reddit.com/t3_5pq7qd?url=https%3A%2F%2Finternethealthreport.org%2Fv01%2F&token=AQAAZV6JWHBBnIcVjV1wvxVg5gKyCQQSdUhGIvuEUmdPZhxhm8kH&app_name=reddit.com  
  is changed to:  
    https://internethealthreport.org/v01/
- steam redirect  
    https://steamcommunity.com/linkfilter/?url=https://getfedora.org/  
  is changed to:  
    https://getfedora.org/

# Comparison to other addons
Unlike a plugin like the (outdated) CleanLinks, Link Cleaner doesn't inject
JavaScript into pages to change links.
Instead, it listens to main url requests and changes them to remove redirects
or tracking.

# License
Released under the GPLv3 license
