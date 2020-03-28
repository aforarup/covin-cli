<h4 align="center">

Track the Coronavirus disease (COVID-19) or the Novel Coronavirus Strain for India.


</h4>

<br>

# covin-cli

- 🇮🇳 Get exhauustive Coronavirus disease (COVID-19) reporting for India
- 🤯 Active daily reporting of your state's COVID-19 statistics
- 🚀 Get district wise cases
- 🗃️ Data: State, Cases, Deaths, Recovered, Active
- 🧪 Daily testing samples data

<br>


## Install

```sh
# Install globally (recommended).
npm install -g covin-cli

# Or run directly with npx (installs CLI on every run).
npx covin-cli
```


## Usage

### All States

```sh
# Display data for all countries.
covin
```

### Single State

```sh
# Display data for given state with districts.
covin <stateName>

# Display data for given state i.e. Karnataka.
covin karnataka

# Display data for given union territory i.e. Ladakh.
covin Ladakh
```

### Samples tested till now

```sh
# Display data for the tests being conducted.
covin tests
```

### Limit the output

````sh
# Print a limited number of entries to the output.
covin --limit 10
covin -l 10
````

#### CLI Help

```sh
# Display the help data.
covin help
covin --help
```

## License & Conduct

- MIT © [Arup Saha](https://twitter.com/aforarup/)