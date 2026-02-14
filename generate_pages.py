import os

# Configuration
template_path = "_template.html"
cities = [
    {"slug": "acailandia", "name": "Açailândia"},
    {"slug": "araguaina", "name": "Araguaína"},
    {"slug": "araguatins", "name": "Araguatins"},
    {"slug": "barra-do-garcas", "name": "Barra do Garças"},
    {"slug": "canaa-dos-carajas", "name": "Canaã dos Carajás"},
    {"slug": "imperatriz", "name": "Imperatriz"}
]

# Read Template
with open(template_path, "r", encoding="utf-8") as f:
    content = f.read()

# Generate Files
for city in cities:
    print(f"Generating page for {city['name']}...")
    
    # Replace Placeholders
    page_content = content.replace("{{CITY_NAME}}", city['name'])
    
    # Write to city folder
    output_path = f"{city['slug']}/index.html"
    os.makedirs(city['slug'], exist_ok=True)
    
    with open(output_path, "w", encoding="utf-8", newline='') as f:
        f.write(page_content)

print("All city pages generated successfully.")
