## Performance Profiling

Initial profiling was performed using **React DevTools Profiler**.

- **Tested interactions:**
  - Sorting a column
  - Searching for a country
  - Selecting a year
  - Adding/removing columns
  

 ## Before optimization

  ### - Sorting a column:

  - **Commit Duration: 2.1s**
  - **Render Duration: 194.8ms**
  - **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

### - Screenshots:

#### Flame Graph for sorting
![Profiler Flame Graph](docs/images/flame-sort-before.png)

#### Ranked Chart for sorting
![Profiler Ranked Chart](docs/images/ranked-sort-before.png)

  ### - Searching for a country:

  - **Commit Duration: 2.5s**
  - **Render Duration: 108.2ms**
  - **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

### - Screenshots:

#### Flame Graph for search
![Profiler Flame Graph](docs/images/flame-search-before.png)

#### Ranked Chart for search
![Profiler Ranked Chart](docs/images/ranked-search-before.png)

  ### - Selecting a year:

  - **Commit Duration: 3.2s**
  - **Render Duration: 107.4ms**
  - **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

### - Screenshots:

#### Flame Graph for year
![Profiler Flame Graph](docs/images/flame-year-before.png)

#### Ranked Chart for year
![Profiler Ranked Chart](docs/images/ranked-year-before.png)

  ### - Adding/removing columns:

  - **Commit Duration: 1s**
  - **Render Duration: 51.2ms**
  - **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

### - Screenshots:

#### Flame Graph for columns
![Profiler Flame Graph](docs/images/flame-column-before.png)

#### Ranked Chart for columns
![Profiler Ranked Chart](docs/images/ranked-column-before.png)


 ## After optimization

  ### - Sorting a column:

  - **Commit Duration: 2.4s**
  - **Render Duration: 114.2ms**
  - **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

### - Screenshots:

#### Flame Graph for sorting
![Profiler Flame Graph](docs/images/flame-sort-after.png)

#### Ranked Chart for sorting
![Profiler Ranked Chart](docs/images/ranked-sort-after.png)

  ### - Searching for a country:

  - **Commit Duration: 2.2s**
  - **Render Duration: 76.4ms**
  - **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

### - Screenshots:

#### Flame Graph for search
![Profiler Flame Graph](docs/images/flame-search-after.png)

#### Ranked Chart for search
![Profiler Ranked Chart](docs/images/ranked-search-after.png)

  ### - Selecting a year:

  - **Commit Duration: 2.8s**
  - **Render Duration: 214.1ms**
  - **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

### - Screenshots:

#### Flame Graph for year
![Profiler Flame Graph](docs/images/flame-year-after.png)

#### Ranked Chart for year
![Profiler Ranked Chart](docs/images/ranked-year-after.png)

  ### - Adding/removing columns:

  - **Commit Duration: 0.9s**
  - **Render Duration: 13.3ms**
  - **Interactions:** Not recorded (Profiler did not capture explicit interactions, but commit and render times were analyzed instead)

### - Screenshots:

#### Flame Graph for columns
![Profiler Flame Graph](docs/images/flame-column-after.png)

#### Ranked Chart for columns
![Profiler Ranked Chart](docs/images/ranked-column-after.png)

---

> As you can see, memoization mainly helped to improve sorting by year and country name. If I have time, I will definitely use an additional strategy and improve the rendering result.