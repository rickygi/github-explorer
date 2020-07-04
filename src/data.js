const languageOptions = [
  { name: 'ActionScript', group: 'Popular' },
  { name: 'C', group: 'Popular' },
  { name: 'C#', group: 'Popular' },
  { name: 'C++', group: 'Popular' },
  { name: 'Clojure', group: 'Popular' },
  { name: 'CoffeeScript', group: 'Popular' },
  { name: 'CSS', group: 'Popular' },
  { name: 'Go', group: 'Popular' },
  { name: 'Haskell', group: 'Popular' },
  { name: 'HTML', group: 'Popular' },
  { name: 'Java', group: 'Popular' },
  { name: 'JavaScript', group: 'Popular' },
  { name: 'Lua', group: 'Popular' },
  { name: 'MATLAB', group: 'Popular' },
  { name: 'Objective-C', group: 'Popular' },
  { name: 'Perl', group: 'Popular' },
  { name: 'PHP', group: 'Popular' },
  { name: 'Python', group: 'Popular' },
  { name: 'R', group: 'Popular' },
  { name: 'Ruby', group: 'Popular' },
  { name: 'Scala', group: 'Popular' },
  { name: 'Shell', group: 'Popular' },
  { name: 'Swift', group: 'Popular' },
  { name: 'TeX', group: 'Popular' },
  { name: 'Vim script', group: 'Popular' },
  { name: '1C Enterprise', group: 'Everything else' },
  { name: '4D', group: 'Everything else' },
  { name: 'ABAP', group: 'Everything else' },
  { name: 'ABNF', group: 'Everything else' },
  { name: 'Ada', group: 'Everything else' },
  { name: 'Adobe Font Metrics', group: 'Everything else' },
  { name: 'Agda', group: 'Everything else' },
  { name: 'AGS Script', group: 'Everything else' },
  { name: 'Alloy', group: 'Everything else' },
  { name: 'Alpine Abuild', group: 'Everything else' },
  { name: 'Altium Designer', group: 'Everything else' },
  { name: 'AMPL', group: 'Everything else' },
  { name: 'AngelScript', group: 'Everything else' },
  { name: 'Ant Build System', group: 'Everything else' },
  { name: 'ANTLR', group: 'Everything else' },
  { name: 'ApacheConf', group: 'Everything else' },
  { name: 'Apex', group: 'Everything else' },
  { name: 'API Blueprint', group: 'Everything else' },
  { name: 'APL', group: 'Everything else' },
  { name: 'Apollo Guidance Computer', group: 'Everything else' },
  { name: 'AppleScript', group: 'Everything else' },
  { name: 'Arc', group: 'Everything else' },
  { name: 'AsciiDoc', group: 'Everything else' },
  { name: 'ASN.1', group: 'Everything else' },
  { name: 'ASP', group: 'Everything else' },
  { name: 'AspectJ', group: 'Everything else' },
  { name: 'Assembly', group: 'Everything else' },
  { name: 'Asymptote', group: 'Everything else' },
  { name: 'ATS', group: 'Everything else' },
  { name: 'Augeas', group: 'Everything else' },
  { name: 'AutoHotkey', group: 'Everything else' },
  { name: 'AutoIt', group: 'Everything else' },
  { name: 'Awk', group: 'Everything else' },
  { name: 'Ballerina', group: 'Everything else' },
  { name: 'Batchfile', group: 'Everything else' },
  { name: 'Befunge', group: 'Everything else' },
  { name: 'BibTeX', group: 'Everything else' },
  { name: 'Bison', group: 'Everything else' },
  { name: 'BitBake', group: 'Everything else' },
  { name: 'Blade', group: 'Everything else' },
  { name: 'BlitzBasic', group: 'Everything else' },
  { name: 'BlitzMax', group: 'Everything else' },
  { name: 'Bluespec', group: 'Everything else' },
  { name: 'Boo', group: 'Everything else' },
  { name: 'Brainfuck', group: 'Everything else' },
  { name: 'Brightscript', group: 'Everything else' },
  { name: 'C-ObjDump', group: 'Everything else' },
  { name: 'C2hs Haskell', group: 'Everything else' },
  { name: 'Cabal Config', group: 'Everything else' },
  { name: 'Cap&#39;n Proto', group: 'Everything else' },
  { name: 'CartoCSS', group: 'Everything else' },
  { name: 'Ceylon', group: 'Everything else' },
  { name: 'Chapel', group: 'Everything else' },
  { name: 'Charity', group: 'Everything else' },
  { name: 'ChucK', group: 'Everything else' },
  { name: 'Cirru', group: 'Everything else' },
  { name: 'Clarion', group: 'Everything else' },
  { name: 'Clean', group: 'Everything else' },
  { name: 'Click', group: 'Everything else' },
  { name: 'CLIPS', group: 'Everything else' },
  { name: 'Closure Templates', group: 'Everything else' },
  { name: 'Cloud Firestore Security Rules', group: 'Everything else' },
  { name: 'CMake', group: 'Everything else' },
  { name: 'COBOL', group: 'Everything else' },
  { name: 'CodeQL', group: 'Everything else' },
  { name: 'ColdFusion', group: 'Everything else' },
  { name: 'ColdFusion CFC', group: 'Everything else' },
  { name: 'COLLADA', group: 'Everything else' },
  { name: 'Common Lisp', group: 'Everything else' },
  { name: 'Common Workflow Language', group: 'Everything else' },
  { name: 'Component Pascal', group: 'Everything else' },
  { name: 'CoNLL-U', group: 'Everything else' },
  { name: 'Cool', group: 'Everything else' },
  { name: 'Coq', group: 'Everything else' },
  { name: 'Cpp-ObjDump', group: 'Everything else' },
  { name: 'Creole', group: 'Everything else' },
  { name: 'Crystal', group: 'Everything else' },
  { name: 'CSON', group: 'Everything else' },
  { name: 'Csound', group: 'Everything else' },
  { name: 'Csound Document', group: 'Everything else' },
  { name: 'Csound Score', group: 'Everything else' },
  { name: 'CSV', group: 'Everything else' },
  { name: 'Cuda', group: 'Everything else' },
  { name: 'cURL Config', group: 'Everything else' },
  { name: 'CWeb', group: 'Everything else' },
  { name: 'Cycript', group: 'Everything else' },
  { name: 'Cython', group: 'Everything else' },
  { name: 'D', group: 'Everything else' },
  { name: 'D-ObjDump', group: 'Everything else' },
  { name: 'Dafny', group: 'Everything else' },
  { name: 'Darcs Patch', group: 'Everything else' },
  { name: 'Dart', group: 'Everything else' },
  { name: 'DataWeave', group: 'Everything else' },
  { name: 'desktop', group: 'Everything else' },
  { name: 'Dhall', group: 'Everything else' },
  { name: 'Diff', group: 'Everything else' },
  { name: 'DIGITAL Command Language', group: 'Everything else' },
  { name: 'dircolors', group: 'Everything else' },
  { name: 'DirectX 3D File', group: 'Everything else' },
  { name: 'DM', group: 'Everything else' },
  { name: 'DNS Zone', group: 'Everything else' },
  { name: 'Dockerfile', group: 'Everything else' },
  { name: 'Dogescript', group: 'Everything else' },
  { name: 'DTrace', group: 'Everything else' },
  { name: 'Dylan', group: 'Everything else' },
  { name: 'E', group: 'Everything else' },
  { name: 'Eagle', group: 'Everything else' },
  { name: 'Easybuild', group: 'Everything else' },
  { name: 'EBNF', group: 'Everything else' },
  { name: 'eC', group: 'Everything else' },
  { name: 'Ecere Projects', group: 'Everything else' },
  { name: 'ECL', group: 'Everything else' },
  { name: 'ECLiPSe', group: 'Everything else' },
  { name: 'EditorConfig', group: 'Everything else' },
  { name: 'Edje Data Collection', group: 'Everything else' },
  { name: 'edn', group: 'Everything else' },
  { name: 'Eiffel', group: 'Everything else' },
  { name: 'EJS', group: 'Everything else' },
  { name: 'Elixir', group: 'Everything else' },
  { name: 'Elm', group: 'Everything else' },
  { name: 'Emacs Lisp', group: 'Everything else' },
  { name: 'EmberScript', group: 'Everything else' },
  { name: 'EML', group: 'Everything else' },
  { name: 'EQ', group: 'Everything else' },
  { name: 'Erlang', group: 'Everything else' },
  { name: 'F#', group: 'Everything else' },
  { name: 'F*', group: 'Everything else' },
  { name: 'Factor', group: 'Everything else' },
  { name: 'Fancy', group: 'Everything else' },
  { name: 'Fantom', group: 'Everything else' },
  { name: 'Faust', group: 'Everything else' },
  { name: 'FIGlet Font', group: 'Everything else' },
  { name: 'Filebench WML', group: 'Everything else' },
  { name: 'Filterscript', group: 'Everything else' },
  { name: 'fish', group: 'Everything else' },
  { name: 'FLUX', group: 'Everything else' },
  { name: 'Formatted', group: 'Everything else' },
  { name: 'Forth', group: 'Everything else' },
  { name: 'Fortran', group: 'Everything else' },
  { name: 'Fortran Free Form', group: 'Everything else' },
  { name: 'FreeMarker', group: 'Everything else' },
  { name: 'Frege', group: 'Everything else' },
  { name: 'Futhark', group: 'Everything else' },
  { name: 'G-code', group: 'Everything else' },
  { name: 'Game Maker Language', group: 'Everything else' },
  { name: 'GAML', group: 'Everything else' },
  { name: 'GAMS', group: 'Everything else' },
  { name: 'GAP', group: 'Everything else' },
  { name: 'GCC Machine Description', group: 'Everything else' },
  { name: 'GDB', group: 'Everything else' },
  { name: 'GDScript', group: 'Everything else' },
  { name: 'GEDCOM', group: 'Everything else' },
  { name: 'Genie', group: 'Everything else' },
  { name: 'Genshi', group: 'Everything else' },
  { name: 'Gentoo Ebuild', group: 'Everything else' },
  { name: 'Gentoo Eclass', group: 'Everything else' },
  { name: 'Gerber Image', group: 'Everything else' },
  { name: 'Gettext Catalog', group: 'Everything else' },
  { name: 'Gherkin', group: 'Everything else' },
  { name: 'Git Attributes', group: 'Everything else' },
  { name: 'Git Config', group: 'Everything else' },
  { name: 'GLSL', group: 'Everything else' },
  { name: 'Glyph', group: 'Everything else' },
  { name: 'Glyph Bitmap Distribution Format', group: 'Everything else' },
  { name: 'GN', group: 'Everything else' },
  { name: 'Gnuplot', group: 'Everything else' },
  { name: 'Golo', group: 'Everything else' },
  { name: 'Gosu', group: 'Everything else' },
  { name: 'Grace', group: 'Everything else' },
  { name: 'Gradle', group: 'Everything else' },
  { name: 'Grammatical Framework', group: 'Everything else' },
  { name: 'Graph Modeling Language', group: 'Everything else' },
  { name: 'GraphQL', group: 'Everything else' },
  { name: 'Graphviz (DOT)', group: 'Everything else' },
  { name: 'Groovy', group: 'Everything else' },
  { name: 'Groovy Server Pages', group: 'Everything else' },
  { name: 'Hack', group: 'Everything else' },
  { name: 'Haml', group: 'Everything else' },
  { name: 'Handlebars', group: 'Everything else' },
  { name: 'HAProxy', group: 'Everything else' },
  { name: 'Harbour', group: 'Everything else' },
  { name: 'Haxe', group: 'Everything else' },
  { name: 'HCL', group: 'Everything else' },
  { name: 'HiveQL', group: 'Everything else' },
  { name: 'HLSL', group: 'Everything else' },
  { name: 'HolyC', group: 'Everything else' },
  { name: 'HTML+Django', group: 'Everything else' },
  { name: 'HTML+ECR', group: 'Everything else' },
  { name: 'HTML+EEX', group: 'Everything else' },
  { name: 'HTML+ERB', group: 'Everything else' },
  { name: 'HTML+PHP', group: 'Everything else' },
  { name: 'HTML+Razor', group: 'Everything else' },
  { name: 'HTTP', group: 'Everything else' },
  { name: 'HXML', group: 'Everything else' },
  { name: 'Hy', group: 'Everything else' },
  { name: 'HyPhy', group: 'Everything else' },
  { name: 'IDL', group: 'Everything else' },
  { name: 'Idris', group: 'Everything else' },
  { name: 'Ignore List', group: 'Everything else' },
  { name: 'IGOR Pro', group: 'Everything else' },
  { name: 'Inform 7', group: 'Everything else' },
  { name: 'INI', group: 'Everything else' },
  { name: 'Inno Setup', group: 'Everything else' },
  { name: 'Io', group: 'Everything else' },
  { name: 'Ioke', group: 'Everything else' },
  { name: 'IRC log', group: 'Everything else' },
  { name: 'Isabelle', group: 'Everything else' },
  { name: 'Isabelle ROOT', group: 'Everything else' },
  { name: 'J', group: 'Everything else' },
  { name: 'Jasmin', group: 'Everything else' },
  { name: 'Java Properties', group: 'Everything else' },
  { name: 'Java Server Pages', group: 'Everything else' },
  { name: 'JavaScript+ERB', group: 'Everything else' },
  { name: 'JFlex', group: 'Everything else' },
  { name: 'Jison', group: 'Everything else' },
  { name: 'Jison Lex', group: 'Everything else' },
  { name: 'Jolie', group: 'Everything else' },
  { name: 'JSON', group: 'Everything else' },
  { name: 'JSON with Comments', group: 'Everything else' },
  { name: 'JSON5', group: 'Everything else' },
  { name: 'JSONiq', group: 'Everything else' },
  { name: 'JSONLD', group: 'Everything else' },
  { name: 'Jsonnet', group: 'Everything else' },
  { name: 'JSX', group: 'Everything else' },
  { name: 'Julia', group: 'Everything else' },
  { name: 'Jupyter Notebook', group: 'Everything else' },
  { name: 'KiCad Layout', group: 'Everything else' },
  { name: 'KiCad Legacy Layout', group: 'Everything else' },
  { name: 'KiCad Schematic', group: 'Everything else' },
  { name: 'Kit', group: 'Everything else' },
  { name: 'Kotlin', group: 'Everything else' },
  { name: 'KRL', group: 'Everything else' },
  { name: 'LabVIEW', group: 'Everything else' },
  { name: 'Lasso', group: 'Everything else' },
  { name: 'Latte', group: 'Everything else' },
  { name: 'Lean', group: 'Everything else' },
  { name: 'Less', group: 'Everything else' },
  { name: 'Lex', group: 'Everything else' },
  { name: 'LFE', group: 'Everything else' },
  { name: 'LilyPond', group: 'Everything else' },
  { name: 'Limbo', group: 'Everything else' },
  { name: 'Linker Script', group: 'Everything else' },
  { name: 'Linux Kernel Module', group: 'Everything else' },
  { name: 'Liquid', group: 'Everything else' },
  { name: 'Literate Agda', group: 'Everything else' },
  { name: 'Literate CoffeeScript', group: 'Everything else' },
  { name: 'Literate Haskell', group: 'Everything else' },
  { name: 'LiveScript', group: 'Everything else' },
  { name: 'LLVM', group: 'Everything else' },
  { name: 'Logos', group: 'Everything else' },
  { name: 'Logtalk', group: 'Everything else' },
  { name: 'LOLCODE', group: 'Everything else' },
  { name: 'LookML', group: 'Everything else' },
  { name: 'LoomScript', group: 'Everything else' },
  { name: 'LSL', group: 'Everything else' },
  { name: 'LTspice Symbol', group: 'Everything else' },
  { name: 'M', group: 'Everything else' },
  { name: 'M4', group: 'Everything else' },
  { name: 'M4Sugar', group: 'Everything else' },
  { name: 'Macaulay2', group: 'Everything else' },
  { name: 'Makefile', group: 'Everything else' },
  { name: 'Mako', group: 'Everything else' },
  { name: 'Markdown', group: 'Everything else' },
  { name: 'Marko', group: 'Everything else' },
  { name: 'Mask', group: 'Everything else' },
  { name: 'Mathematica', group: 'Everything else' },
  { name: 'Maven POM', group: 'Everything else' },
  { name: 'Max', group: 'Everything else' },
  { name: 'MAXScript', group: 'Everything else' },
  { name: 'mcfunction', group: 'Everything else' },
  { name: 'MediaWiki', group: 'Everything else' },
  { name: 'Mercury', group: 'Everything else' },
  { name: 'Meson', group: 'Everything else' },
  { name: 'Metal', group: 'Everything else' },
  { name: 'Microsoft Developer Studio Project', group: 'Everything else' },
  { name: 'MiniD', group: 'Everything else' },
  { name: 'Mirah', group: 'Everything else' },
  { name: 'mIRC Script', group: 'Everything else' },
  { name: 'MLIR', group: 'Everything else' },
  { name: 'Modelica', group: 'Everything else' },
  { name: 'Modula-2', group: 'Everything else' },
  { name: 'Modula-3', group: 'Everything else' },
  { name: 'Module Management System', group: 'Everything else' },
  { name: 'Monkey', group: 'Everything else' },
  { name: 'Moocode', group: 'Everything else' },
  { name: 'MoonScript', group: 'Everything else' },
  { name: 'Motorola 68K Assembly', group: 'Everything else' },
  { name: 'MQL4', group: 'Everything else' },
  { name: 'MQL5', group: 'Everything else' },
  { name: 'MTML', group: 'Everything else' },
  { name: 'MUF', group: 'Everything else' },
  { name: 'mupad', group: 'Everything else' },
  { name: 'Muse', group: 'Everything else' },
  { name: 'Myghty', group: 'Everything else' },
  { name: 'nanorc', group: 'Everything else' },
  { name: 'NASL', group: 'Everything else' },
  { name: 'NCL', group: 'Everything else' },
  { name: 'Nearley', group: 'Everything else' },
  { name: 'Nemerle', group: 'Everything else' },
  { name: 'NEON', group: 'Everything else' },
  { name: 'nesC', group: 'Everything else' },
  { name: 'NetLinx', group: 'Everything else' },
  { name: 'NetLinx+ERB', group: 'Everything else' },
  { name: 'NetLogo', group: 'Everything else' },
  { name: 'NewLisp', group: 'Everything else' },
  { name: 'Nextflow', group: 'Everything else' },
  { name: 'Nginx', group: 'Everything else' },
  { name: 'Nim', group: 'Everything else' },
  { name: 'Ninja', group: 'Everything else' },
  { name: 'Nit', group: 'Everything else' },
  { name: 'Nix', group: 'Everything else' },
  { name: 'NL', group: 'Everything else' },
  { name: 'NPM Config', group: 'Everything else' },
  { name: 'NSIS', group: 'Everything else' },
  { name: 'Nu', group: 'Everything else' },
  { name: 'NumPy', group: 'Everything else' },
  { name: 'ObjDump', group: 'Everything else' },
  { name: 'Object Data Instance Notation', group: 'Everything else' },
  { name: 'Objective-C++', group: 'Everything else' },
  { name: 'Objective-J', group: 'Everything else' },
  { name: 'ObjectScript', group: 'Everything else' },
  { name: 'OCaml', group: 'Everything else' },
  { name: 'Odin', group: 'Everything else' },
  { name: 'Omgrofl', group: 'Everything else' },
  { name: 'ooc', group: 'Everything else' },
  { name: 'Opa', group: 'Everything else' },
  { name: 'Opal', group: 'Everything else' },
  { name: 'Open Policy Agent', group: 'Everything else' },
  { name: 'OpenCL', group: 'Everything else' },
  { name: 'OpenEdge ABL', group: 'Everything else' },
  { name: 'OpenQASM', group: 'Everything else' },
  { name: 'OpenRC runscript', group: 'Everything else' },
  { name: 'OpenSCAD', group: 'Everything else' },
  { name: 'OpenStep Property List', group: 'Everything else' },
  { name: 'OpenType Feature File', group: 'Everything else' },
  { name: 'Org', group: 'Everything else' },
  { name: 'Ox', group: 'Everything else' },
  { name: 'Oxygene', group: 'Everything else' },
  { name: 'Oz', group: 'Everything else' },
  { name: 'P4', group: 'Everything else' },
  { name: 'Pan', group: 'Everything else' },
  { name: 'Papyrus', group: 'Everything else' },
  { name: 'Parrot', group: 'Everything else' },
  { name: 'Parrot Assembly', group: 'Everything else' },
  { name: 'Parrot Internal Representation', group: 'Everything else' },
  { name: 'Pascal', group: 'Everything else' },
  { name: 'Pawn', group: 'Everything else' },
  { name: 'Pep8', group: 'Everything else' },
  { name: 'Pic', group: 'Everything else' },
  { name: 'Pickle', group: 'Everything else' },
  { name: 'PicoLisp', group: 'Everything else' },
  { name: 'PigLatin', group: 'Everything else' },
  { name: 'Pike', group: 'Everything else' },
  { name: 'PlantUML', group: 'Everything else' },
  { name: 'PLpgSQL', group: 'Everything else' },
  { name: 'PLSQL', group: 'Everything else' },
  { name: 'Pod', group: 'Everything else' },
  { name: 'Pod 6', group: 'Everything else' },
  { name: 'PogoScript', group: 'Everything else' },
  { name: 'Pony', group: 'Everything else' },
  { name: 'PostCSS', group: 'Everything else' },
  { name: 'PostScript', group: 'Everything else' },
  { name: 'POV-Ray SDL', group: 'Everything else' },
  { name: 'PowerBuilder', group: 'Everything else' },
  { name: 'PowerShell', group: 'Everything else' },
  { name: 'Prisma', group: 'Everything else' },
  { name: 'Processing', group: 'Everything else' },
  { name: 'Proguard', group: 'Everything else' },
  { name: 'Prolog', group: 'Everything else' },
  { name: 'Propeller Spin', group: 'Everything else' },
  { name: 'Protocol Buffer', group: 'Everything else' },
  { name: 'Public Key', group: 'Everything else' },
  { name: 'Pug', group: 'Everything else' },
  { name: 'Puppet', group: 'Everything else' },
  { name: 'Pure Data', group: 'Everything else' },
  { name: 'PureBasic', group: 'Everything else' },
  { name: 'PureScript', group: 'Everything else' },
  { name: 'Python console', group: 'Everything else' },
  { name: 'Python traceback', group: 'Everything else' },
  { name: 'q', group: 'Everything else' },
  { name: 'QMake', group: 'Everything else' },
  { name: 'QML', group: 'Everything else' },
  { name: 'Quake', group: 'Everything else' },
  { name: 'Racket', group: 'Everything else' },
  { name: 'Ragel', group: 'Everything else' },
  { name: 'Raku', group: 'Everything else' },
  { name: 'RAML', group: 'Everything else' },
  { name: 'Rascal', group: 'Everything else' },
  { name: 'Raw token data', group: 'Everything else' },
  { name: 'RDoc', group: 'Everything else' },
  { name: 'Readline Config', group: 'Everything else' },
  { name: 'REALbasic', group: 'Everything else' },
  { name: 'Reason', group: 'Everything else' },
  { name: 'Rebol', group: 'Everything else' },
  { name: 'Red', group: 'Everything else' },
  { name: 'Redcode', group: 'Everything else' },
  { name: 'Regular Expression', group: 'Everything else' },
  { name: 'Ren&#39;Py', group: 'Everything else' },
  { name: 'RenderScript', group: 'Everything else' },
  { name: 'reStructuredText', group: 'Everything else' },
  { name: 'REXX', group: 'Everything else' },
  { name: 'RHTML', group: 'Everything else' },
  { name: 'Rich Text Format', group: 'Everything else' },
  { name: 'Ring', group: 'Everything else' },
  { name: 'Riot', group: 'Everything else' },
  { name: 'RMarkdown', group: 'Everything else' },
  { name: 'RobotFramework', group: 'Everything else' },
  { name: 'Roff', group: 'Everything else' },
  { name: 'Roff Manpage', group: 'Everything else' },
  { name: 'Rouge', group: 'Everything else' },
  { name: 'RPC', group: 'Everything else' },
  { name: 'RPM Spec', group: 'Everything else' },
  { name: 'RUNOFF', group: 'Everything else' },
  { name: 'Rust', group: 'Everything else' },
  { name: 'Sage', group: 'Everything else' },
  { name: 'SaltStack', group: 'Everything else' },
  { name: 'SAS', group: 'Everything else' },
  { name: 'Sass', group: 'Everything else' },
  { name: 'Scaml', group: 'Everything else' },
  { name: 'Scheme', group: 'Everything else' },
  { name: 'Scilab', group: 'Everything else' },
  { name: 'SCSS', group: 'Everything else' },
  { name: 'sed', group: 'Everything else' },
  { name: 'Self', group: 'Everything else' },
  { name: 'ShaderLab', group: 'Everything else' },
  { name: 'ShellSession', group: 'Everything else' },
  { name: 'Shen', group: 'Everything else' },
  { name: 'Sieve', group: 'Everything else' },
  { name: 'Slash', group: 'Everything else' },
  { name: 'Slice', group: 'Everything else' },
  { name: 'Slim', group: 'Everything else' },
  { name: 'Smali', group: 'Everything else' },
  { name: 'Smalltalk', group: 'Everything else' },
  { name: 'Smarty', group: 'Everything else' },
  { name: 'SmPL', group: 'Everything else' },
  { name: 'SMT', group: 'Everything else' },
  { name: 'Solidity', group: 'Everything else' },
  { name: 'SourcePawn', group: 'Everything else' },
  { name: 'SPARQL', group: 'Everything else' },
  { name: 'Spline Font Database', group: 'Everything else' },
  { name: 'SQF', group: 'Everything else' },
  { name: 'SQL', group: 'Everything else' },
  { name: 'SQLPL', group: 'Everything else' },
  { name: 'Squirrel', group: 'Everything else' },
  { name: 'SRecode Template', group: 'Everything else' },
  { name: 'SSH Config', group: 'Everything else' },
  { name: 'Stan', group: 'Everything else' },
  { name: 'Standard ML', group: 'Everything else' },
  { name: 'Starlark', group: 'Everything else' },
  { name: 'Stata', group: 'Everything else' },
  { name: 'STON', group: 'Everything else' },
  { name: 'Stylus', group: 'Everything else' },
  { name: 'SubRip Text', group: 'Everything else' },
  { name: 'SugarSS', group: 'Everything else' },
  { name: 'SuperCollider', group: 'Everything else' },
  { name: 'Svelte', group: 'Everything else' },
  { name: 'SVG', group: 'Everything else' },
  { name: 'SWIG', group: 'Everything else' },
  { name: 'SystemVerilog', group: 'Everything else' },
  { name: 'Tcl', group: 'Everything else' },
  { name: 'Tcsh', group: 'Everything else' },
  { name: 'Tea', group: 'Everything else' },
  { name: 'Terra', group: 'Everything else' },
  { name: 'Texinfo', group: 'Everything else' },
  { name: 'Text', group: 'Everything else' },
  { name: 'Textile', group: 'Everything else' },
  { name: 'Thrift', group: 'Everything else' },
  { name: 'TI Program', group: 'Everything else' },
  { name: 'TLA', group: 'Everything else' },
  { name: 'TOML', group: 'Everything else' },
  { name: 'TSQL', group: 'Everything else' },
  { name: 'TSX', group: 'Everything else' },
  { name: 'Turing', group: 'Everything else' },
  { name: 'Turtle', group: 'Everything else' },
  { name: 'Twig', group: 'Everything else' },
  { name: 'TXL', group: 'Everything else' },
  { name: 'Type Language', group: 'Everything else' },
  { name: 'TypeScript', group: 'Everything else' },
  { name: 'Unified Parallel C', group: 'Everything else' },
  { name: 'Unity3D Asset', group: 'Everything else' },
  { name: 'Unix Assembly', group: 'Everything else' },
  { name: 'Uno', group: 'Everything else' },
  { name: 'UnrealScript', group: 'Everything else' },
  { name: 'UrWeb', group: 'Everything else' },
  { name: 'V', group: 'Everything else' },
  { name: 'Vala', group: 'Everything else' },
  { name: 'VBA', group: 'Everything else' },
  { name: 'VBScript', group: 'Everything else' },
  { name: 'VCL', group: 'Everything else' },
  { name: 'Verilog', group: 'Everything else' },
  { name: 'VHDL', group: 'Everything else' },
  { name: 'Vim Snippet', group: 'Everything else' },
  { name: 'Visual Basic .NET', group: 'Everything else' },
  { name: 'Volt', group: 'Everything else' },
  { name: 'Vue', group: 'Everything else' },
  { name: 'Wavefront Material', group: 'Everything else' },
  { name: 'Wavefront Object', group: 'Everything else' },
  { name: 'wdl', group: 'Everything else' },
  { name: 'Web Ontology Language', group: 'Everything else' },
  { name: 'WebAssembly', group: 'Everything else' },
  { name: 'WebIDL', group: 'Everything else' },
  { name: 'WebVTT', group: 'Everything else' },
  { name: 'Wget Config', group: 'Everything else' },
  { name: 'Windows Registry Entries', group: 'Everything else' },
  { name: 'wisp', group: 'Everything else' },
  { name: 'Wollok', group: 'Everything else' },
  { name: 'World of Warcraft Addon Data', group: 'Everything else' },
  { name: 'X BitMap', group: 'Everything else' },
  { name: 'X Font Directory Index', group: 'Everything else' },
  { name: 'X PixMap', group: 'Everything else' },
  { name: 'X10', group: 'Everything else' },
  { name: 'xBase', group: 'Everything else' },
  { name: 'XC', group: 'Everything else' },
  { name: 'XCompose', group: 'Everything else' },
  { name: 'XML', group: 'Everything else' },
  { name: 'XML Property List', group: 'Everything else' },
  { name: 'Xojo', group: 'Everything else' },
  { name: 'XPages', group: 'Everything else' },
  { name: 'XProc', group: 'Everything else' },
  { name: 'XQuery', group: 'Everything else' },
  { name: 'XS', group: 'Everything else' },
  { name: 'XSLT', group: 'Everything else' },
  { name: 'Xtend', group: 'Everything else' },
  { name: 'Yacc', group: 'Everything else' },
  { name: 'YAML', group: 'Everything else' },
  { name: 'YANG', group: 'Everything else' },
  { name: 'YARA', group: 'Everything else' },
  { name: 'YASnippet', group: 'Everything else' },
  { name: 'ZAP', group: 'Everything else' },
  { name: 'Zeek', group: 'Everything else' },
  { name: 'ZenScript', group: 'Everything else' },
  { name: 'Zephir', group: 'Everything else' },
  { name: 'Zig', group: 'Everything else' },
  { name: 'ZIL', group: 'Everything else' },
  { name: 'Zimpl', group: 'Everything else' }
];

const sortOptions = [
  { name: 'Best match', value: ':desc' },
  { name: 'Most stars', value: 'stars:desc' },
  { name: 'Fewest stars', value: 'stars:asc' },
  { name: 'Most forks', value: 'forks:desc' },
  { name: 'Fewest forks', value: 'forks:asc' },
  { name: 'Recently updated', value: 'updated:desc' },
  { name: 'Least recently updated', value: 'updated:asc' }
];

export { languageOptions, sortOptions };
