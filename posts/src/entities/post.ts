import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    author: string

    @Column()
    authorName: string

    @Column({ unique: true })
    title: string

    @Column({ type: 'text' })
    content: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
