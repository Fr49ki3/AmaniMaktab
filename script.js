body {
  margin: 0;
  font-family: Arial, sans-serif;
  text-align: center;
  background: #111;
  color: white;
}

.lang-toggle {
  margin: 10px;
}

.lang-toggle button {
  padding: 8px 16px;
  margin: 0 5px;
  background: #444;
  border: none;
  color: white;
  cursor: pointer;
}

.lang-toggle button.active {
  background: #888;
}

.hero {
  padding: 20px;
}

.hero-img {
  max-width: 600px;
  height: auto;
  border-radius: 50%;
  border: 3px solid white;
  margin: 10px;
}

/* Hide both language blocks by default */
.lang-en, .lang-ps {
  display: none;
}
