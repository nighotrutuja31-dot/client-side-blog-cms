/* ==================================================
   BLOGIFY - CLIENT SIDE BLOG CMS
================================================== */


/* ==================================================
   DEMO IMAGE
================================================== */

const defaultImage =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85";


/* ==================================================
   DEMO POSTS
================================================== */

const demoPosts = [

    {
        id: "demo-1",

        title:
            "The Future of Web Development",

        author:
            "Rutuja",

        category:
            "Technology",

        excerpt:
            "Explore how modern tools and technologies are changing the way we build websites and digital experiences.",

        content:
            "Web development is continuously evolving. Modern developers are using powerful frontend technologies, cloud platforms and AI-assisted tools to build faster and more engaging digital experiences.\n\nHTML provides the structure, CSS creates the visual experience, and JavaScript adds interactivity. Together, these technologies form the foundation of modern web development.",

        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",

        status:
            "published",

        featured:
            true,

        likes:
            24,

        createdAt:
            "2026-10-01T10:00:00",

        updatedAt:
            "2026-10-01T10:00:00"
    },


    {
        id: "demo-2",

        title:
            "A Beginner's Guide to Data Science",

        author:
            "Rutuja",

        category:
            "Data Science",

        excerpt:
            "Learn the basic concepts of data science, analytics, visualization and machine learning.",

        content:
            "Data Science combines statistics, programming, data analysis and machine learning to extract meaningful insights from data.\n\nPython, Pandas, NumPy, Matplotlib and Scikit-learn are some of the popular tools used by data professionals.",

        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",

        status:
            "published",

        featured:
            false,

        likes:
            18,

        createdAt:
            "2026-10-02T11:00:00",

        updatedAt:
            "2026-10-02T11:00:00"
    },


    {
        id: "demo-3",

        title:
            "Learning JavaScript Step by Step",

        author:
            "Rutuja",

        category:
            "Programming",

        excerpt:
            "Understand the important JavaScript concepts that every beginner developer should know.",

        content:
            "JavaScript is one of the most important technologies for modern web development.\n\nBeginners should first understand variables, functions, arrays, objects, conditions and loops. After that, DOM manipulation and event handling can be learned to build interactive websites.",

        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",

        status:
            "draft",

        featured:
            false,

        likes:
            9,

        createdAt:
            "2026-10-03T12:00:00",

        updatedAt:
            "2026-10-03T12:00:00"
    }

];


/* ==================================================
   LOAD POSTS
================================================== */

let storedPosts =
    localStorage.getItem("blogifyPosts");


let posts;


if (storedPosts) {

    posts =
        JSON.parse(storedPosts);

} else {

    posts =
        demoPosts;

    savePosts();

}


/* ==================================================
   GLOBAL FILTER
================================================== */

let currentFilter = "all";


/* ==================================================
   DOM ELEMENTS
================================================== */

const editorModal =
    document.getElementById(
        "editorModal"
    );

const previewModal =
    document.getElementById(
        "previewModal"
    );

const postForm =
    document.getElementById(
        "postForm"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );


/* ==================================================
   INITIAL LOAD
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderPosts();

        updateStats();

    }
);


/* ==================================================
   SAVE POSTS
================================================== */

function savePosts() {

    localStorage.setItem(
        "blogifyPosts",
        JSON.stringify(posts)
    );

}


/* ==================================================
   UNIQUE ID
================================================== */

function generateId() {

    return Date.now().toString()
        + "-"
        + Math.random()
            .toString(36)
            .substring(2, 9);

}


/* ==================================================
   OPEN EDITOR
================================================== */

function openEditor(id = null) {

    editorModal.classList.add(
        "show"
    );


    if (id) {

        const post =
            posts.find(
                p => p.id === id
            );


        if (!post) return;


        document.getElementById(
            "editorHeading"
        ).textContent =
            "Edit your story";


        document.getElementById(
            "postId"
        ).value =
            post.id;


        document.getElementById(
            "postTitle"
        ).value =
            post.title;


        document.getElementById(
            "postAuthor"
        ).value =
            post.author;


        document.getElementById(
            "postCategory"
        ).value =
            post.category;


        document.getElementById(
            "postExcerpt"
        ).value =
            post.excerpt;


        document.getElementById(
            "postContent"
        ).value =
            post.content;


        document.getElementById(
            "postImage"
        ).value =
            post.image;


        document.getElementById(
            "postFeatured"
        ).checked =
            post.featured;


        const radio =
            document.querySelector(
                `input[name="status"][value="${post.status}"]`
            );


        if (radio) {

            radio.checked =
                true;

        }


        updateImagePreview(
            post.image
        );

    }

    else {

        postForm.reset();


        document.getElementById(
            "editorHeading"
        ).textContent =
            "Create a new story";


        document.getElementById(
            "postId"
        ).value =
            "";


        updateImagePreview(
            ""
        );

    }

}


/* ==================================================
   CLOSE EDITOR
================================================== */

function closeEditor() {

    editorModal.classList.remove(
        "show"
    );

    postForm.reset();

}


/* ==================================================
   IMAGE PREVIEW
================================================== */

document.getElementById(
    "postImage"
).addEventListener(
    "input",
    function () {

        updateImagePreview(
            this.value
        );

    }
);


function updateImagePreview(url) {

    const preview =
        document.getElementById(
            "imagePreview"
        );


    if (url) {

        preview.innerHTML =
            `
                <img
                    src="${url}"
                    alt="Preview"
                    onerror="this.style.display='none'"
                >
            `;

    }

    else {

        preview.innerHTML =
            `
                <span>
                    🖼️ Image preview
                </span>
            `;

    }

}


/* ==================================================
   FORM SUBMISSION
================================================== */

postForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const id =
            document.getElementById(
                "postId"
            ).value;


        const title =
            document.getElementById(
                "postTitle"
            ).value.trim();


        const author =
            document.getElementById(
                "postAuthor"
            ).value.trim();


        const category =
            document.getElementById(
                "postCategory"
            ).value;


        const excerpt =
            document.getElementById(
                "postExcerpt"
            ).value.trim();


        const content =
            document.getElementById(
                "postContent"
            ).value.trim();


        const image =
            document.getElementById(
                "postImage"
            ).value.trim();


        const featured =
            document.getElementById(
                "postFeatured"
            ).checked;


        const status =
            document.querySelector(
                'input[name="status"]:checked'
            ).value;


        if (
            !title ||
            !author ||
            !content
        ) {

            showToast(
                "Please complete the required fields."
            );

            return;

        }


        const finalImage =
            image ||
            defaultImage;


        /* ======================================
           UPDATE
        ====================================== */

        if (id) {

            const index =
                posts.findIndex(
                    p => p.id === id
                );


            if (index !== -1) {

                posts[index].title =
                    title;

                posts[index].author =
                    author;

                posts[index].category =
                    category;

                posts[index].excerpt =
                    excerpt ||
                    content.substring(
                        0,
                        150
                    ) + "...";

                posts[index].content =
                    content;

                posts[index].image =
                    finalImage;

                posts[index].status =
                    status;

                posts[index].featured =
                    featured;

                posts[index].updatedAt =
                    new Date().toISOString();


                savePosts();

                renderPosts();

                updateStats();

                closeEditor();

                showToast(
                    "Story updated successfully!"
                );

            }

        }


        /* ======================================
           CREATE
        ====================================== */

        else {

            const newPost = {

                id:
                    generateId(),

                title:
                    title,

                author:
                    author,

                category:
                    category,

                excerpt:
                    excerpt ||
                    content.substring(
                        0,
                        150
                    ) + "...",

                content:
                    content,

                image:
                    finalImage,

                status:
                    status,

                featured:
                    featured,

                likes:
                    0,

                createdAt:
                    new Date().toISOString(),

                updatedAt:
                    new Date().toISOString()

            };


            posts.unshift(
                newPost
            );


            savePosts();

            renderPosts();

            updateStats();

            closeEditor();

            showToast(
                "Story published to your studio!"
            );

        }

    }
);


/* ==================================================
   RENDER POSTS
================================================== */

function renderPosts() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    let filtered =
        posts.filter(
            function (post) {

                const matchesSearch =

                    post.title
                        .toLowerCase()
                        .includes(search)

                    ||

                    post.author
                        .toLowerCase()
                        .includes(search)

                    ||

                    post.category
                        .toLowerCase()
                        .includes(search)

                    ||

                    post.content
                        .toLowerCase()
                        .includes(search);


                let matchesFilter;


                if (
                    currentFilter ===
                    "all"
                ) {

                    matchesFilter =
                        true;

                }

                else if (
                    currentFilter ===
                    "featured"
                ) {

                    matchesFilter =
                        post.featured;

                }

                else {

                    matchesFilter =
                        post.status ===
                        currentFilter;

                }


                return (
                    matchesSearch &&
                    matchesFilter
                );

            }
        );


    filtered.sort(
        function (a, b) {

            return new Date(
                b.updatedAt
            )
            -
            new Date(
                a.updatedAt
            );

        }
    );


    const container =
        document.getElementById(
            "postsContainer"
        );


    container.innerHTML =
        "";


    const empty =
        document.getElementById(
            "emptyState"
        );


    if (
        filtered.length === 0
    ) {

        empty.style.display =
            "block";

        return;

    }


    empty.style.display =
        "none";


    filtered.forEach(
        function (post) {

            container.appendChild(
                createPostCard(
                    post
                )
            );

        }
    );

}


/* ==================================================
   CREATE POST CARD
================================================== */

function createPostCard(post) {

    const article =
        document.createElement(
            "article"
        );


    article.className =
        "post-card";


    const readingTime =
        calculateReadingTime(
            post.content
        );


    const date =
        formatDate(
            post.updatedAt
        );


    const firstLetter =
        post.author
            .charAt(0)
            .toUpperCase();


    article.innerHTML =
        `

        <div class="post-image-wrapper">

            <img
                class="post-image"
                src="${escapeHTML(post.image)}"
                alt="${escapeHTML(post.title)}"
                onerror="this.src='${defaultImage}'"
            >

            ${
                post.featured
                ?
                `
                <span class="featured-label">
                    ⭐ FEATURED
                </span>
                `
                :
                ""
            }


            <span
                class="post-status ${post.status}"
            >
                ${
                    post.status ===
                    "published"
                    ?
                    "● Published"
                    :
                    "● Draft"
                }
            </span>

        </div>


        <div class="post-content">

            <span class="category">
                ${escapeHTML(post.category)}
            </span>


            <h3>
                ${escapeHTML(post.title)}
            </h3>


            <p class="post-description">
                ${escapeHTML(post.excerpt)}
            </p>


            <div class="post-info">

                <div class="author">

                    <span class="author-avatar">
                        ${firstLetter}
                    </span>

                    ${escapeHTML(post.author)}

                </div>


                <span>
                    ${date}
                </span>


                <span>
                    ⏱ ${readingTime} min
                </span>

            </div>

        </div>


        <div class="card-actions">

            <button
                class="card-action"
                onclick="previewPost('${post.id}')"
            >
                👁 Preview
            </button>


            <button
                class="card-action like"
                onclick="likePost('${post.id}')"
            >
                ❤️ ${post.likes || 0}
            </button>


            <button
                class="card-action"
                onclick="openEditor('${post.id}')"
            >
                ✏ Edit
            </button>


            <button
                class="card-action delete"
                onclick="deletePost('${post.id}')"
            >
                🗑 Delete
            </button>

        </div>

    `;


    return article;

}


/* ==================================================
   LIKE POST
================================================== */

function likePost(id) {

    const post =
        posts.find(
            p => p.id === id
        );


    if (!post) return;


    post.likes =
        (post.likes || 0) + 1;


    savePosts();

    renderPosts();

    updateStats();

    showToast(
        "Thanks for the ❤️!"
    );

}


/* ==================================================
   DELETE POST
================================================== */

function deletePost(id) {

    const post =
        posts.find(
            p => p.id === id
        );


    if (!post) return;


    const confirmed =
        confirm(
            `Delete "${post.title}"?`
        );


    if (!confirmed) return;


    posts =
        posts.filter(
            p => p.id !== id
        );


    savePosts();

    renderPosts();

    updateStats();

    showToast(
        "Story deleted successfully."
    );

}


/* ==================================================
   PREVIEW
================================================== */

function previewPost(id) {

    const post =
        posts.find(
            p => p.id === id
        );


    if (!post) return;


    document.getElementById(
        "previewImage"
    ).src =
        post.image;


    document.getElementById(
        "previewCategory"
    ).textContent =
        post.category;


    document.getElementById(
        "previewTitle"
    ).textContent =
        post.title;


    document.getElementById(
        "previewMeta"
    ).textContent =
        `By ${post.author} • ${formatDate(post.updatedAt)} • ${calculateReadingTime(post.content)} min read • ${post.status}`;


    document.getElementById(
        "previewText"
    ).textContent =
        post.content;


    previewModal.classList.add(
        "show"
    );

}


/* ==================================================
   CLOSE PREVIEW
================================================== */

function closePreview() {

    previewModal.classList.remove(
        "show"
    );

}


/* ==================================================
   FILTER
================================================== */

function setFilter(
    filter,
    button
) {

    currentFilter =
        filter;


    document
        .querySelectorAll(
            ".filter"
        )
        .forEach(
            btn =>
                btn.classList.remove(
                    "active"
                )
        );


    button.classList.add(
        "active"
    );


    renderPosts();

}


/* ==================================================
   UPDATE STATISTICS
================================================== */

function updateStats() {

    const total =
        posts.length;


    const published =
        posts.filter(
            p =>
                p.status ===
                "published"
        ).length;


    const drafts =
        posts.filter(
            p =>
                p.status ===
                "draft"
        ).length;


    const likes =
        posts.reduce(
            (sum, post) =>
                sum +
                (post.likes || 0),
            0
        );


    document.getElementById(
        "totalPosts"
    ).textContent =
        total;


    document.getElementById(
        "publishedPosts"
    ).textContent =
        published;


    document.getElementById(
        "draftPosts"
    ).textContent =
        drafts;


    document.getElementById(
        "totalLikes"
    ).textContent =
        likes;

}


/* ==================================================
   READING TIME
================================================== */

function calculateReadingTime(
    content
) {

    const words =
        content
            .trim()
            .split(/\s+/)
            .length;


    return Math.max(
        1,
        Math.ceil(
            words / 200
        )
    );

}


/* ==================================================
   DATE FORMAT
================================================== */

function formatDate(
    dateString
) {

    const date =
        new Date(
            dateString
        );


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* ==================================================
   ESCAPE HTML
================================================== */

function escapeHTML(
    text
) {

    const element =
        document.createElement(
            "div"
        );


    element.textContent =
        text;


    return element.innerHTML;

}


/* ==================================================
   TOAST
================================================== */

function showToast(
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        function () {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );

}


/* ==================================================
   CLOSE MODALS ON OUTSIDE CLICK
================================================== */

window.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            editorModal
        ) {

            closeEditor();

        }


        if (
            event.target ===
            previewModal
        ) {

            closePreview();

        }

    }
);


/* ==================================================
   ESCAPE KEY
================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeEditor();

            closePreview();

        }

    }
);