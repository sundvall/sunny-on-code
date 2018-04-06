---
path: "/storybook-redux-setup"
date: "2018-04-06"
title: "Extract components fram a large codebase with react-storybook"
tags: ['component-based-development', 'react', 'react-storybook']
excerpt: "Break free from a large codebase to work independently, visualize dataflow with redux-dev-tools"
---

# A setup to develop frontend outside the main app
The main codebase is a hassle to update. It is dependent on data that you can not control and is of no interest. That data is like the weather, so you can not know if you will be stalled now, later or not. In the good scenario everything is a happy path, but still you have to click like a maniac to recreate the exact scenario to test a minor css update.  
My happiness was enormous, in the discovery of independence. The saviour was 'react-storybook', that acted as a crowbar to retrieve only code for the days' menu. In a short time it was possible to not only update the main codebase from a distance. It also became possible to get a living documentation of all possible states the components could exist as. Fantastic times.
## The mega blurry
The original codebase had another aspect. It had grown out of the hands of all developers, and was hard to maintain. Actually almost impossible to maintain, and while refactoring, it was evident that large parts where not even used. Its purpose was to solve some complex flows with many combinations of data that affected navigation and more. It spreads data to dozens of modules, that all use their individual names and properties to control it. It was like navigate a large vessel in the fog, with testers screaming to get to port. A difficulty was to get a clear view of the data, and its transformation during the users clicks and decisions. Thank you for 'redux' and 'redux-dev-tools' that cleared the sight. Visualization of data became possible.  
## More tools
Another small knife of surgery are the unit tests, run with 'jest'. (Any other test-runner might do the work, but a growing team can benefit from tools well supported by the community and popular.) Here the commandline relieves the dependency on the browser, while setting up test for non-ui helper scripts. Also here, development can be done on functions of interest, independently from the integrated main site.
## how?
