import { createApp } from 'vue';

import App from './App.vue';
import ActiveElement from './components/ActiveElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';

const app = createApp(App);

app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);

app.mount('#app');

/// 元件的層級關係主要是由各自的 template（或 render 函式）決定的，不會自然'顯示在 main.js'
/// the main problem this section want to describe is 'emit passing'
/// when there's the structure : App.vue -> component A(KnowledgeBase.vue) -> component B(KnowledgeGrid.vue)
/// component B may emit some event, to tell App.vue to changes something 
/// but component A have nothing to do with the emit function, it just passing(forward) it
/// Vue offers a solution, provide and inject
/// a pettern we can use to provide data in one place and inject(use) it in another place
/// when passing parameter to the grand-children, provide and inject can work without parent passing the parameter(parent -> children unidirection data flow)
/// when grand-children is going to call emit to grand-parent, it's a bit different
/// we can define a method in grand-parent(App.vue) and pass this method with props down to the grand-children where it should be called


/// IMPORTANT : we should not always use provide and inject to replace props and custom events
/// instead, props and custom event should be our default communication mechanism
/// because when we see App.vue provides something, we need to check all children component to see which one is using it
/// so, use it wisely