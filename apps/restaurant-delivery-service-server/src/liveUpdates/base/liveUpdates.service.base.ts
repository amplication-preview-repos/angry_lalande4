/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  LiveUpdates as PrismaLiveUpdates,
  Order as PrismaOrder,
} from "@prisma/client";

export class LiveUpdatesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LiveUpdatesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.liveUpdates.count(args);
  }

  async liveUpdatesItems<T extends Prisma.LiveUpdatesFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LiveUpdatesFindManyArgs>
  ): Promise<PrismaLiveUpdates[]> {
    return this.prisma.liveUpdates.findMany<Prisma.LiveUpdatesFindManyArgs>(
      args
    );
  }
  async liveUpdates<T extends Prisma.LiveUpdatesFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LiveUpdatesFindUniqueArgs>
  ): Promise<PrismaLiveUpdates | null> {
    return this.prisma.liveUpdates.findUnique(args);
  }
  async createLiveUpdates<T extends Prisma.LiveUpdatesCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LiveUpdatesCreateArgs>
  ): Promise<PrismaLiveUpdates> {
    return this.prisma.liveUpdates.create<T>(args);
  }
  async updateLiveUpdates<T extends Prisma.LiveUpdatesUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LiveUpdatesUpdateArgs>
  ): Promise<PrismaLiveUpdates> {
    return this.prisma.liveUpdates.update<T>(args);
  }
  async deleteLiveUpdates<T extends Prisma.LiveUpdatesDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LiveUpdatesDeleteArgs>
  ): Promise<PrismaLiveUpdates> {
    return this.prisma.liveUpdates.delete(args);
  }

  async getOrder(parentId: string): Promise<PrismaOrder | null> {
    return this.prisma.liveUpdates
      .findUnique({
        where: { id: parentId },
      })
      .order();
  }
}
