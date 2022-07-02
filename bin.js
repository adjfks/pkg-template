import whichPMRuns from 'which-pm-runs'
import boxen from 'boxen'

const argv = process.argv.slice(2)

if (!argv.length) {
  console.log('please specitfy the package manager you want to use: pnpm | yarn | npm')
  process.exit(1)
}


const wantedPM = argv[0]
if (wantedPM !== 'pnpm' && wantedPM !== 'yarn' && wantedPM !== 'npm') {
  console.log('Then packge manager specified is invalid , only allow pnpm | yarn | npm')
  process.exit(1)
}

// { name: 'yarn', version: '1.22.18' }
const usedPM = whichPMRuns()
// 输出警告
if (usedPM && usedPM.name !== wantedPM) {
  const boxOptions = { borderColor: 'red', borderStyle: 'double', padding: 1 }
  switch (wantedPM) {
    case 'pnpm':
      console.log(boxen(`please use pnpm`, boxOptions))
      break
    case 'yarn':
      console.log(boxen(`please use yarn`, boxOptions));
      break
    case 'npm':
      console.log(boxen(`please use npm`, boxOptions));
      break
  }
  process.exit(1)
}
