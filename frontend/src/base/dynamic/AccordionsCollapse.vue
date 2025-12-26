<template>
    <div class="container">
        <h1 class="mb-5">Accordions & Collapse</h1>
        <!--Accordion -->
        <div id="myaccordion" class="accordion">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne">Accordion 1</button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show"
                data-bs-parent="#myaccordion">
                    <div class="accordion-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque mollitia commodi unde maxime quas fugit saepe in, temporibus error quibusdam atque ut dolore praesentium at, aliquid qui. Quibusdam, fuga sunt!</p>
                        <p>Dolore vel similique quibusdam nostrum autem amet temporibus sit dolorem hic eveniet doloremque molestiae consequatur nihil adipisci aperiam ipsam nisi delectus, ad totam velit. Error enim in iure necessitatibus amet?</p>
                        <p>Laboriosam earum quidem iusto odit. Dolores autem sunt ad officia expedita sit consectetur nobis quas suscipit perspiciatis. Esse ad nisi doloribus voluptatibus ducimus ullam neque, quaerat aut error quibusdam consequuntur.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo">Accordion 2</button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse"
                data-bs-parent="#myaccordion">
                    <div class="accordion-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque mollitia commodi unde maxime quas fugit saepe in, temporibus error quibusdam atque ut dolore praesentium at, aliquid qui. Quibusdam, fuga sunt!</p>
                        <p>Dolore vel similique quibusdam nostrum autem amet temporibus sit dolorem hic eveniet doloremque molestiae consequatur nihil adipisci aperiam ipsam nisi delectus, ad totam velit. Error enim in iure necessitatibus amet?</p>
                        <p>Laboriosam earum quidem iusto odit. Dolores autem sunt ad officia expedita sit consectetur nobis quas suscipit perspiciatis. Esse ad nisi doloribus voluptatibus ducimus ullam neque, quaerat aut error quibusdam consequuntur.</p>
                    </div>
                </div>
            </div>

            <br><hr>
            <!-- Collapse -->
            <div class="my-3">
                <button class="btn btn-primary"
                data-bs-toggle="collapse"
                data-bs-target="#mycontent">
                Toggle Content</button>
            </div>
            <div class="collapse" id="mycontent">
                <div class="card">
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, pariatur repellat accusantium repellendus dolore quam exercitationem rem facilis officia molestiae quis tempore at quas quos velit. Vero, ad. Voluptas, error!</p>
                        <p>Numquam, esse iure quae adipisci distinctio modi eligendi exercitationem sapiente cumque deleniti corporis magnam a alias non tempora quo voluptate obcaecati quis dolorem, possimus quos molestias nam excepturi. Sequi, eaque.</p>
                        <p>Nulla aliquid laudantium sed, molestiae natus possimus ratione nobis! Repellendus obcaecati est dolores magni voluptatibus suscipit recusandae velit, soluta, autem, quae accusantium illum architecto maxime qui accusamus? Consectetur, sequi earum!</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>