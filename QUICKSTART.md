# Quick Start Guide

## How to Run Your Calculator Tools Website

### Option 1: Open Directly in Browser (Easiest)
1. Navigate to `/Users/muratkahraman/Downloads/dbm/`
2. Double-click `index.html`
3. Your default browser will open the website

### Option 2: Using Python Simple Server
```bash
cd /Users/muratkahraman/Downloads/dbm
python3 -m http.server 8000
```
Then open: http://localhost:8000

### Option 3: Using PHP Built-in Server
```bash
cd /Users/muratkahraman/Downloads/dbm
php -S localhost:8000
```
Then open: http://localhost:8000

### Option 4: Using VS Code Live Server
1. Open the folder in VS Code
2. Install "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"

## Available Tools

### Calculators
- `/calculators/percentage.html` - Percentage calculations
- `/calculators/bmi.html` - Body Mass Index calculator
- `/calculators/tip.html` - Tip and bill splitting calculator

### Converters
- `/converters/length.html` - Length unit converter
- `/converters/temperature.html` - Temperature converter
- `/converters/weight.html` - Weight/mass converter

## Next Steps

### To Add More Calculators:
1. Copy an existing calculator HTML file
2. Modify the calculation logic
3. Update the title and description
4. Add a link from `index.html`

### To Customize Design:
1. Edit `styles.css` for colors and layout
2. Modify CSS variables at the top of the file
3. Change the header gradient or button styles

### Recommended Additions:
- Scientific calculator with advanced math functions
- Mortgage and loan calculators
- Currency converter (needs API)
- Date/time calculators
- Area and volume converters
- Speed converter
- Fuel consumption calculator

## Testing

Test your calculators:
1. Open each calculator page
2. Try different input values
3. Test with edge cases (0, negative numbers, decimals)
4. Check responsive design on mobile/tablet sizes

## Deployment

### Deploy to GitHub Pages:
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in repository settings
4. Your site will be live at: `https://username.github.io/repository-name/`

### Deploy to Netlify:
1. Sign up at netlify.com
2. Drag and drop your `dbm` folder
3. Your site will be live instantly

### Deploy to Vercel:
1. Sign up at vercel.com
2. Import your project
3. Deploy with one click

---

**Enjoy building your calculator tools website!**
