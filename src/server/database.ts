// database.ts

import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './sequelize'; // Import your existing sequelize instance

// Squad Model
export interface SquadAttributes {
    id: number;
    name: string;
    description?: string;
}

export interface SquadCreationAttributes extends Optional<SquadAttributes, 'id'> {} 

export class Squad extends Model<SquadAttributes, SquadCreationAttributes> implements SquadAttributes {
    public id!: number;
    public name!: string;
    public description?: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Squad.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: 'squads',
    sequelize,
});

// Questions Model
export interface QuestionAttributes {
    id: number;
    squadId: number;
    text: string;
}

export interface QuestionCreationAttributes extends Optional<QuestionAttributes, 'id'> {} 

export class Question extends Model<QuestionAttributes, QuestionCreationAttributes> implements QuestionAttributes {
    public id!: number;
    public squadId!: number;
    public text!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Question.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    squadId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Squad,
            key: 'id'
        }
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'questions',
    sequelize,
});

// User Answers Model
export interface UserAnswerAttributes {
    id: number;
    questionId: number;
    userId: string;
    answer: string;
}

export interface UserAnswerCreationAttributes extends Optional<UserAnswerAttributes, 'id'> {}

export class UserAnswer extends Model<UserAnswerAttributes, UserAnswerCreationAttributes> implements UserAnswerAttributes {
    public id!: number;
    public questionId!: number;
    public userId!: string;
    public answer!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

UserAnswer.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Question,
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'user_answers',
    sequelize,
});

// Leaderboard Model
export interface LeaderboardAttributes {
    id: number;
    userId: string;
    score: number;
}

export interface LeaderboardCreationAttributes extends Optional<LeaderboardAttributes, 'id'> {} 

export class Leaderboard extends Model<LeaderboardAttributes, LeaderboardCreationAttributes> implements LeaderboardAttributes {
    public id!: number;
    public userId!: string;
    public score!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Leaderboard.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'leaderboard',
    sequelize,
});