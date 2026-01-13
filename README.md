# Calculator Tools Website

A comprehensive web-based calculator and conversion tools website similar to RapidTables.com. This project provides various calculators and unit converters with a clean, responsive design.

## Features

### Calculators
- **Percentage Calculator** - Calculate percentages, percentage changes, and more
- **BMI Calculator** - Calculate Body Mass Index with metric and imperial units
- **Tip Calculator** - Calculate tips and split bills among multiple people

### Converters
- **Length Converter** - Convert between meters, kilometers, miles, feet, inches, and more
- **Temperature Converter** - Convert between Celsius, Fahrenheit, and Kelvin
- **Weight Converter** - Convert between kilograms, pounds, ounces, grams, and more

## Project Structure

```
dbm/
├── index.html              # Main landing page
├── styles.css              # Global styles
├── script.js               # Utility functions
├── calculators/            # Calculator tools
│   ├── percentage.html
│   ├── bmi.html
│   └── tip.html
└── converters/             # Conversion tools
    ├── length.html
    ├── temperature.html
    └── weight.html
```

## Getting Started

1. Open `index.html` in your web browser
2. Navigate to different calculators and converters from the homepage
3. All tools work offline - no server required!

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (no frameworks required)
- Responsive design for mobile and desktop

## Features

### User-Friendly Interface
- Clean, modern design with a blue color scheme
- Responsive layout that works on all devices
- Intuitive navigation between tools
- Real-time calculations as you type

### Calculation Tools
- Multiple calculator types covering math, health, and finance
- Various unit converters for common conversions
- Instant results with formatted numbers
- Helpful reference tables and common conversion examples

### Design Highlights
- Gradient header with clear branding
- Card-based layout for easy browsing
- Hover effects for better interactivity
- Color-coded results for better readability

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* ... more colors */
}
```

### Adding New Tools
1. Create a new HTML file in `/calculators` or `/converters`
2. Copy the structure from an existing calculator
3. Add your calculation logic in a `<script>` tag
4. Link to it from `index.html`

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Future Enhancements

Consider adding:
- Scientific calculator with advanced functions
- Financial calculators (mortgage, loan, interest)
- Date/time calculators
- Color converters
- Statistical calculators
- More unit converters (area, volume, speed, etc.)

## License

Free to use for personal and commercial projects.

---

**Built with HTML, CSS, and JavaScript** - No dependencies required!
