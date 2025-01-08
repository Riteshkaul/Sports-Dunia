import { DataSource } from 'typeorm';
import { College } from 'src/entities/college.entity';
import { City } from 'src/entities/city.entity';
import { State } from 'src/entities/state.entity';

const dataSource = new DataSource({ /* ...same config as in app.module.ts... */ });

async function seedDatabase() {
  await dataSource.initialize();

  // Add States
  const stateRepository = dataSource.getRepository(State);
  const states = ['State1', 'State2', 'State3'].map((name) => stateRepository.create({ name }));
  await stateRepository.save(states);

  // Add Cities
  const cityRepository = dataSource.getRepository(City);
  const cities = ['City1', 'City2', 'City3'].map((name) => cityRepository.create({ name }));
  await cityRepository.save(cities);

  // Add Colleges
  const collegeRepository = dataSource.getRepository(College);
  for (let i = 0; i < 100; i++) {
    const college = collegeRepository.create({
      name: `College ${i + 1}`,
      score: Math.floor(Math.random() * 1000) + 1,
      city: cities[Math.floor(Math.random() * cities.length)],
      state: states[Math.floor(Math.random() * states.length)],
    });
    await collegeRepository.save(college);
  }

  console.log('Database seeded!');
  process.exit();
}

seedDatabase();
