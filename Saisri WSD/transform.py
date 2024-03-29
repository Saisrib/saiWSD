from lxml import etree


xml_tree = etree.parse("e.xml")

xsl_transform = etree.XSLT(etree.parse("s.xslt"))

html_tree = xsl_transform(xml_tree)


xmlschema = etree.XMLSchema(etree.parse("e.xsd"))

if xmlschema.validate(xml_tree):
    print("XML is valid against XSD.")
else:
    print("XML is not valid against XSD.")
    exit(1)

with open("outputdogs.html", "wb") as output_file:
    output_file.write(etree.tostring(html_tree, pretty_print=True))