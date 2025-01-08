import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegePlacement } from 'src/entities/college-placement.entity';

@Injectable()
export class CollegeService {
  constructor(
    @InjectRepository(CollegePlacement)
    private readonly collegePlacementRepository: Repository<CollegePlacement>,
  ) {}

  async getAvgPlacementData(collegeId: number): Promise<any> {
    const placements = await this.collegePlacementRepository.find({ where: { college: collegeId } });

    const yearlyData = placements.reduce((acc, curr) => {
      const year = curr.year;
      if (!acc[year]) {
        acc[year] = { highest_placement: 0, average_placement: 0, median_placement: 0, placement_rate: 0, count: 0 };
      }
      if (curr.highest_placement && curr.average_placement && curr.median_placement && curr.placement_rate) {
        acc[year].highest_placement += curr.highest_placement;
        acc[year].average_placement += curr.average_placement;
        acc[year].median_placement += curr.median_placement;
        acc[year].placement_rate += curr.placement_rate;
        acc[year].count++;
      }
      return acc;
    }, {});

    const avgPlacement = Object.keys(yearlyData).map((year) => {
      const data = yearlyData[year];
      return {
        year: Number(year),
        highest_placement: data.highest_placement / data.count,
        average_placement: data.average_placement / data.count,
        median_placement: data.median_placement / data.count,
        placement_rate: data.placement_rate / data.count,
      };
    });

    return avgPlacement;
  }
  async getPlacementData(collegeId: number): Promise<any> {
    const placements = await this.collegePlacementRepository.find({ where: { college: collegeId } });
  
    const validPlacements = placements.filter(
      (placement) =>
        placement.highest_placement > 0 &&
        placement.average_placement > 0 &&
        placement.median_placement > 0 &&
        placement.placement_rate > 0,
    );
  
    const sortedPlacements = validPlacements.sort((a, b) => b.year - a.year);
  
    let placementTrend = 'NO DATA';
    if (sortedPlacements.length >= 2) {
      const [latest, previous] = sortedPlacements;
      placementTrend = latest.placement_rate > previous.placement_rate ? 'UP' : 'DOWN';
    }
  
    return {
      placements: sortedPlacements,
      placement_trend: placementTrend,
    };
  }
  import { CollegeWiseCourse } from 'src/entities/college-wise-course.entity';

@Injectable()
export class CollegeService {
  constructor(
    // existing repository injections...
    @InjectRepository(CollegeWiseCourse)
    private readonly courseRepository: Repository<CollegeWiseCourse>,
  ) {}

  async getCourses(collegeId: number): Promise<any> {
    return await this.courseRepository.find({
      where: { college: collegeId },
      order: { course_fee: 'DESC' },
    });
  }
}

}

