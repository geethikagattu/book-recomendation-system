// Global state
let currentMood = null;
let currentGenre = 'all';
let currentPage = 1;
let booksPerPage = 6;
let favorites = [];

// Mood-specific genres mapping
const moodGenres = {
    happy: ['Comedy', 'Romance', 'Contemporary Fiction', 'Young Adult', 'Humor'],
    sad: ['Literary Fiction', 'Drama', 'Poetry', 'Memoir', 'Historical Fiction'],
    excited: ['Adventure', 'Thriller', 'Action', 'Science Fiction', 'Fantasy'],
    relaxed: ['Cozy Mystery', 'Contemporary Romance', 'Slice of Life', 'Self-Help', 'Travel'],
    mysterious: ['Mystery', 'Suspense', 'Gothic', 'Crime Fiction', 'Psychological Thriller'],
    reflective: ['Philosophy', 'Literary Fiction', 'Essays', 'Biography', 'Psychology']
};

// Book data with detailed information for each mood
const books = [
    // Happy Mood Books
    {
        id: 1,
        title: "The House in the Cerulean Sea",
        author: "TJ Klune",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1569514209i/45047384.jpg",
        description: "A magical story about found family and belonging. Linus Baker leads a quiet life as a Case Worker at the Department in Charge of Magical Youth until he's sent to investigate a special orphanage on a remote island.",
        moods: ["happy", "heartwarming", "peaceful"],
        genre: "Fantasy",
        rating: 4.7,
        year: 2020,
        pages: 396
    },
    {
        id: 2,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1559986152i/386162.jpg",
        description: "A hilarious adventure through space following the last surviving human after Earth's destruction. Featuring paranoid androids, philosophical computers, and really bad poetry.",
        moods: ["happy", "funny", "excited"],
        genre: "Science Fiction",
        rating: 4.5,
        year: 1979,
        pages: 193
    },

    // Sad Mood Books
    {
        id: 3,
        title: "A Little Life",
        author: "Hanya Yanagihara",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446469353i/22822858.jpg",
        description: "A profound story of trauma, friendship, and the limits of human endurance, following four college friends in New York City.",
        moods: ["sad", "emotional", "reflective"],
        genre: "Literary Fiction",
        rating: 4.3,
        year: 2015,
        pages: 816
    },
    {
        id: 4,
        title: "The Song of Achilles",
        author: "Madeline Miller",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597344484i/13623848.jpg",
        description: "A retelling of the Iliad that focuses on the love story between Achilles and Patroclus, bringing ancient Greece to vivid life.",
        moods: ["sad", "romantic", "emotional"],
        genre: "Historical Fiction",
        rating: 4.6,
        year: 2011,
        pages: 378
    },

    // Excited Mood Books
    {
        id: 5,
        title: "Six of Crows",
        author: "Leigh Bardugo",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651710803i/23437156.jpg",
        description: "A thrilling heist story set in a fantasy world, following six dangerous outcasts on an impossible mission.",
        moods: ["excited", "mysterious", "tense"],
        genre: "Fantasy",
        rating: 4.7,
        year: 2015,
        pages: 465
    },
    {
        id: 6,
        title: "Project Hail Mary",
        author: "Andy Weir",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
        description: "A lone astronaut must save humanity from extinction in this thrilling science fiction adventure from the author of The Martian.",
        moods: ["excited", "hopeful", "tense"],
        genre: "Science Fiction",
        rating: 4.8,
        year: 2021,
        pages: 476
    },

    // Relaxed Mood Books
    {
        id: 7,
        title: "The Thursday Murder Club",
        author: "Richard Osman",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602847689i/46000520.jpg",
        description: "Four retirees meet weekly to solve cold cases, but find themselves in the middle of a real murder investigation.",
        moods: ["relaxed", "mysterious", "happy"],
        genre: "Mystery",
        rating: 4.2,
        year: 2020,
        pages: 382
    },
    {
        id: 8,
        title: "The Midnight Library",
        author: "Matt Haig",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
        description: "Between life and death, there is a library where you can try all the other lives you could have lived.",
        moods: ["relaxed", "thoughtful", "hopeful"],
        genre: "Fiction",
        rating: 4.4,
        year: 2020,
        pages: 304
    },

    // Mysterious Mood Books
    {
        id: 9,
        title: "The Seven and a Half Deaths of Evelyn Hardcastle",
        author: "Stuart Turton",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1662661354i/36337550.jpg",
        description: "A mind-bending murder mystery where each day is lived through a different body until the killer is caught.",
        moods: ["mysterious", "excited", "tense"],
        genre: "Mystery",
        rating: 4.5,
        year: 2018,
        pages: 435
    },
    {
        id: 10,
        title: "Mexican Gothic",
        author: "Silvia Moreno-Garcia",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1607462569i/53152636.jpg",
        description: "A young woman investigates her cousin's claims of supernatural horrors at a remote mansion in 1950s Mexico.",
        moods: ["mysterious", "scared", "tense"],
        genre: "Horror",
        rating: 4.3,
        year: 2020,
        pages: 352
    },

    // Reflective Mood Books
    {
        id: 11,
        title: "The Midnight Library",
        author: "Matt Haig",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
        description: "A story about regret, hope, and transformation, exploring the infinite possibilities of life.",
        moods: ["reflective", "thoughtful", "hopeful"],
        genre: "Fiction",
        rating: 4.4,
        year: 2020,
        pages: 304
    },
    {
        id: 12,
        title: "When Breath Becomes Air",
        author: "Paul Kalanithi",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463936399i/25899336.jpg",
        description: "A profound reflection on the meaning of life and death from a neurosurgeon diagnosed with terminal cancer.",
        moods: ["reflective", "emotional", "thoughtful"],
        genre: "Memoir",
        rating: 4.8,
        year: 2016,
        pages: 228
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadFavorites();
    displayBooks(books);
});

function setupEventListeners() {
    // Mood selection
    document.querySelectorAll('.mood-btn').forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.dataset.mood;
            toggleMoodSelection(button, mood);
        });
    });

    // Genre selection
    const genreSelect = document.getElementById('genreSelect');
    if (genreSelect) {
        genreSelect.addEventListener('change', (e) => {
            currentGenre = e.target.value;
            filterAndDisplayBooks();
        });
    }

    // Random book button
    const randomBtn = document.getElementById('randomBookBtn');
    if (randomBtn) {
        randomBtn.addEventListener('click', showRandomBook);
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.toLowerCase().trim();
            filterAndDisplayBooks(query);
        }, 300));
    }

    // Pagination
    setupPagination();

    // Favorites button
    const favoritesBtn = document.getElementById('favoritesBtn');
    if (favoritesBtn) {
        favoritesBtn.addEventListener('click', showFavorites);
    }
}

function toggleMoodSelection(button, mood) {
    const allMoodButtons = document.querySelectorAll('.mood-btn');
    
    if (currentMood === mood) {
        currentMood = null;
        button.classList.remove('active');
        // Reset genres to default when mood is deselected
        updateGenreOptions(null);
    } else {
        allMoodButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentMood = mood;
        // Update genres for selected mood
        updateGenreOptions(mood);
    }

    // Reset genre selection when mood changes
    currentGenre = 'all';
    const genreSelect = document.getElementById('genreSelect');
    if (genreSelect) {
        genreSelect.value = 'all';
    }

    filterAndDisplayBooks();
}

function filterAndDisplayBooks(searchQuery = '') {
    let filteredBooks = [...books];

    // Apply mood filter
    if (currentMood) {
        filteredBooks = filteredBooks.filter(book => 
            book.moods.includes(currentMood.toLowerCase())
        );
    }

    // Apply genre filter
    if (currentGenre && currentGenre !== 'all') {
        filteredBooks = filteredBooks.filter(book => 
            book.genre.toLowerCase() === currentGenre.toLowerCase()
        );
    }

    // Apply search filter
    if (searchQuery) {
        filteredBooks = filteredBooks.filter(book => {
            const searchFields = [
                book.title,
                book.author,
                book.description,
                book.genre,
                ...book.moods
            ].map(field => field.toLowerCase());

            return searchFields.some(field => field.includes(searchQuery));
        });
    }

    currentPage = 1;
    displayBooks(filteredBooks);
}

function displayBooks(booksToShow) {
    const container = document.querySelector('.books-container');
    if (!container) return;

    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const paginatedBooks = booksToShow.slice(startIndex, endIndex);

    container.innerHTML = '';

    if (paginatedBooks.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-book-reader"></i>
                <p>No books found. Try adjusting your filters.</p>
            </div>
        `;
    } else {
        const booksGrid = document.createElement('div');
        booksGrid.className = 'books-grid';
        
        paginatedBooks.forEach(book => {
            const bookCard = createBookCard(book);
            booksGrid.appendChild(bookCard);
        });

        container.appendChild(booksGrid);
    }

    updatePagination(booksToShow.length);
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    const isFavorite = favorites.includes(book.id);
    card.innerHTML = `
        <div class="book-cover">
            <img src="${book.cover}" alt="${book.title} cover">
            <div class="book-overlay">
                <button class="details-btn" data-id="${book.id}">View Details</button>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${book.id}">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
        <div class="book-info">
            <h3>${book.title}</h3>
            <p class="author">by ${book.author}</p>
            <div class="book-meta">
                <span class="genre">${book.genre}</span>
                <span class="rating">★ ${book.rating.toFixed(1)}</span>
            </div>
            <div class="book-moods">
                ${book.moods.map(mood => `<span class="mood-tag">${mood}</span>`).join('')}
            </div>
        </div>
    `;

    // Add click handler for details button
    const detailsBtn = card.querySelector('.details-btn');
    detailsBtn.addEventListener('click', () => showBookDetails(book));

    // Add click handler for favorite button
    const favoriteBtn = card.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(book.id);
        favoriteBtn.classList.toggle('active');
        updateFavoritesCount();
    });

    return card;
}

function showBookDetails(book) {
    const modal = document.getElementById('book-modal');
    const isFavorite = favorites.includes(book.id);
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <div class="book-details">
                <div class="book-cover-large">
                    <img src="${book.cover}" alt="${book.title} cover">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${book.id}">
                        <i class="fas fa-heart"></i>
                        ${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
                <div class="book-info-detailed">
                    <h2>${book.title}</h2>
                    <p class="author">by ${book.author}</p>
                    <div class="book-meta">
                        <span class="genre">${book.genre}</span>
                        <span class="year">${book.year}</span>
                        <span class="pages">${book.pages} pages</span>
                        <span class="rating">★ ${book.rating.toFixed(1)}</span>
                    </div>
                    <p class="description">${book.description}</p>
                    <div class="book-moods">
                        <h4>Moods:</h4>
                        ${book.moods.map(mood => `<span class="mood-tag">${mood}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Favorite button functionality in modal
    const favoriteBtn = modal.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', () => {
        toggleFavorite(book.id);
        favoriteBtn.classList.toggle('active');
        favoriteBtn.innerHTML = `
            <i class="fas fa-heart"></i>
            ${favorites.includes(book.id) ? 'Remove from Favorites' : 'Add to Favorites'}
        `;
        updateFavoritesCount();
        // Update the card view if it exists
        const cardFavoriteBtn = document.querySelector(`.book-card .favorite-btn[data-id="${book.id}"]`);
        if (cardFavoriteBtn) {
            cardFavoriteBtn.classList.toggle('active');
        }
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function updatePagination(totalBooks) {
    const totalPages = Math.ceil(totalBooks / booksPerPage);
    const pageInfo = document.getElementById('pageInfo');
    if (pageInfo) {
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    }

    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
    }
}

function setupPagination() {
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                filterAndDisplayBooks();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(books.length / booksPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                filterAndDisplayBooks();
            }
        });
    }
}

function showRandomBook() {
    let availableBooks = [...books];

    if (currentMood) {
        availableBooks = availableBooks.filter(book => 
            book.moods.includes(currentMood.toLowerCase())
        );
    }

    if (currentGenre !== 'all') {
        availableBooks = availableBooks.filter(book => 
            book.genre.toLowerCase() === currentGenre.toLowerCase()
        );
    }

    if (availableBooks.length === 0) {
        alert('No books match the current filters. Try changing the filters!');
        return;
    }

    const randomBook = availableBooks[Math.floor(Math.random() * availableBooks.length)];
    showBookDetails(randomBook);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add these new functions for favorites functionality
function toggleFavorite(bookId) {
    const index = favorites.indexOf(bookId);
    if (index === -1) {
        favorites.push(bookId);
    } else {
        favorites.splice(index, 1);
    }
    saveFavorites();
}

function saveFavorites() {
    localStorage.setItem('bookFavorites', JSON.stringify(favorites));
}

function loadFavorites() {
    const saved = localStorage.getItem('bookFavorites');
    favorites = saved ? JSON.parse(saved) : [];
    updateFavoritesCount();
}

function updateFavoritesCount() {
    const favoritesBtn = document.getElementById('favoritesBtn');
    if (favoritesBtn) {
        favoritesBtn.innerHTML = `<i class="fas fa-heart"></i> Favorites (${favorites.length})`;
    }
}

function showFavorites() {
    if (favorites.length === 0) {
        alert('No favorites yet! Click the heart icon on any book to add it to your favorites.');
        return;
    }
    
    const favoriteBooks = books.filter(book => favorites.includes(book.id));
    displayBooks(favoriteBooks);
}

// Add these styles to your existing styles.css file
const additionalStyles = `
    .books-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 2rem;
        padding: 1rem;
    }

    .book-card {
        background: white;
        border-radius: var(--border-radius);
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition: var(--transition);
    }

    .book-cover {
        position: relative;
        padding-bottom: 150%;
    }

    .book-cover img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .book-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: var(--transition);
    }

    .book-card:hover .book-overlay {
        opacity: 1;
    }

    .details-btn {
        padding: 0.75rem 1.5rem;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: var(--transition);
    }

    .details-btn:hover {
        background: var(--primary-hover);
        transform: scale(1.05);
    }

    .favorite-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: white;
        border: none;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: var(--transition);
        opacity: 0;
    }

    .book-card:hover .favorite-btn {
        opacity: 1;
    }

    .favorite-btn i {
        color: #999;
        font-size: 18px;
        transition: var(--transition);
    }

    .favorite-btn.active i {
        color: #ff4757;
    }

    .favorite-btn:hover i {
        transform: scale(1.2);
    }

    .book-details .favorite-btn {
        position: relative;
        top: 10px;
        right: auto;
        width: auto;
        padding: 8px 16px;
        border-radius: var(--border-radius);
        opacity: 1;
        background: var(--primary-color);
        color: white;
    }

    .book-details .favorite-btn i {
        color: white;
        margin-right: 8px;
    }

    .book-details .favorite-btn.active {
        background: #ff4757;
    }
`;

// Add the additional styles to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Update genre select based on selected mood
function updateGenreOptions(mood) {
    const genreSelect = document.getElementById('genreSelect');
    if (!genreSelect) return;

    // Clear existing options
    genreSelect.innerHTML = '<option value="all">All Genres</option>';

    // Add mood-specific genres
    if (mood && moodGenres[mood]) {
        moodGenres[mood].forEach(genre => {
            const option = document.createElement('option');
            option.value = genre.toLowerCase();
            option.textContent = genre;
            genreSelect.appendChild(option);
        });
    }
}